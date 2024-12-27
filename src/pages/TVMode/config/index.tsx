import Breadcrumb from 'Components/Common/Breadcrumb'
import { useFormik } from 'formik'
import React, { useCallback, useEffect, useState } from 'react'
import { Card, CardBody, CardTitle, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Input } from 'reactstrap'
import * as Yup from 'yup'
import "./index.scss"
import { FaSquare, FaCheckSquare, FaMinusSquare } from "react-icons/fa";
import { IoMdArrowDropright } from "react-icons/io";
import TreeView, { flattenTree, INode } from "react-accessible-treeview";
import cx from "classnames";
import { FullScreen, useFullScreenHandle } from 'react-full-screen'
import BIShowcase from 'pages/Showcase'

type TTVData = {
  name: string;
  id: number | string;
  children: {
    id: string | number;
    name: string;
    children: {
      name: string;
      id: number | string;
      isActive: boolean;
      seconds: number 
    }[];
  }[];
}

const TvModeConfig = () => {
  const [TVs, setTVs] = useState<TTVData[]>([
    {
      name: "TV1",
      id: 890,
      children: [
        {
          id: "data-string",
          name: "Modulo 01",
          children: [
            { name: "Estoque", id: 690, isActive: true, seconds: 10 },
            { name: "Faturamento", id: 1001, isActive: false, seconds: 10 },
          ],
        },
      ],
    },
  ]);

  const addTV = () => {
    setTVs((prev) => {
      const newTV = {
        name: `Nova TV ${prev.length + 1}`,
        id: Date.now(),
        children: [],
      };
      return [...prev, newTV];
    });
  };

  const deleteTV = (index: number) => {
    setTVs((prev) => prev.filter((_, i) => i !== index));
  };

  const addModulo = (indexTV: number) => {
    setTVs((prev) => {
      const updatedTVs = [...prev];
      const tv = updatedTVs[indexTV];
      const id = Date.now();
      const newModulo:TTVData['children'][0] = {
        name: `Módulo ${tv.children.length + 1}`,
        id,
        children: [
          { name: "Estoque", id: `Estoque-${id}`, isActive: true, seconds: 10  },
          { name: "Faturamento", id: `Faturamento-${id}`, isActive: false, seconds: 10 },
        ],
      };
      tv.children.push(newModulo);
      return updatedTVs;
    });
  };

  const removeModulo = (indexTV: number, moduloId: number | string) => {
    console.log(moduloId)
    setTVs((prev) => {
      const updatedTVs = [...prev];
      updatedTVs[indexTV].children = updatedTVs[indexTV].children.filter((modulo) => modulo.id !== moduloId);
      return updatedTVs;
    });
  };

  const updateVision = (moduleId: number | string, visionId: number | string, changes: Partial<{ isActive: boolean; seconds: number }>) => {
    setTVs((prev) => prev.map((tv) => ({
        ...tv,
        children: tv.children.map((module) => {
            if (module.id !== moduleId) return module;
            return {
                ...module,
                children: module.children.map((vision) =>
                    vision.id === visionId ? { ...vision, ...changes } : vision
                ),
            };
        }),
    })));
};

useEffect(() => {
  console.log(TVs)
}, [TVs])

  return (
    <div className='page-content'>
      <Breadcrumb title="Modo Tv" breadPath={[{ link: "#", name: "Modo TV" }, { link: "#", name: "Configuração" }]} />
      <div>
        <Card>
          <CardBody>
            <CardTitle className="h4 mb-4 d-flex justify-content-between" >
              <span>Configurar Modo TV</span>
              <button
                onClick={addTV}
                type="button"
                className="btn btn-primary">
                <i className="fas fa-plus font-size-16 align-middle me-2"></i>
                Criar Nova TV
              </button>
            </CardTitle>
            {TVs.map((tv, index) => (
              <TV
                key={index}
                tv={tv}
                index={index}
                addModulo={addModulo}
                deleteTV={deleteTV}
                removeModulo={removeModulo}
                updateVision={updateVision}
              />
            ))}
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

const TV = ({ tv, addModulo, deleteTV, removeModulo, index, updateVision }) => {
  const [isDropdwownOpen, setIsDropdownOpen] = useState(false)

  return (
    <div>
      <div className="checkbox">
        <h4 className='d-flex align-items-center gap-2'>
          {tv.name}
          <Dropdown
            isOpen={isDropdwownOpen}
            toggle={() => setIsDropdownOpen((previous) => !previous)}
          >
            <DropdownToggle className="btn btn-light">
              <i className="fas fa-ellipsis-v" />
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem onClick={() => addModulo(index)}>
                <i
                  title='Adicionar TV'
                  className="fas fa-pen font-size-16 align-middle me-2"
                  />
                  Editar TV
              </DropdownItem>
              <DropdownItem onClick={() => addModulo(index)}>
                <i
                  title='Adicionar TV'
                  className="fas fa-plus font-size-16 align-middle me-2 add-tv-icon"
                  />
                  Adicionar Módulo
              </DropdownItem>
              <DropdownItem onClick={() => deleteTV(index)}>
                <i
                  title='Deletar TV'
                  className="fas fa-trash font-size-16 align-middle me-2 delete-tv-icon"
                  />
                  Deletar TV
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </h4>
        <TreeViewComponent
          data={tv}
          removeModulo={(moduloId) => removeModulo(index, moduloId)}
          updateVision={updateVision}
        />
      </div>
    </div>
  );
};

type TTreeViewComponent = {
  data: TTVData;
  removeModulo: Function;
  updateVision: Function;
}
const TreeViewComponent = (props: TTreeViewComponent) => {
  const { data, removeModulo, updateVision } = props;
  const fullscreenHandle = useFullScreenHandle();

  useEffect(() => {
    console.log(data, "dancing through the rain")
  }, [])
  
  const reportChange = useCallback(
    (state) => {
      console.log("Fullscreen State:", state ? "Ativado" : "Desativado");
    },
    []
  );

  return (
    <>
      {
        data.children.map((module) => (
          <Expansible key={module.id} module={module} removeModulo={removeModulo} updateVision={updateVision} />
        ))
      }

    </>
  );
};

type TExpansible = {
  module: TTVData['children'][0];
  removeModulo: Function;
  updateVision: Function;
}
const Expansible = (props: TExpansible) => {
  const { module, removeModulo, updateVision } = props
  const [expanded, setExpanded] = useState(false)
  const [isDropdwownOpen, setIsDropdownOpen] = useState(false)
  const fullscreenHandle = useFullScreenHandle();
  
    const reportChange = useCallback(
      (state) => {
        console.log("Fullscreen State:", state ? "Ativado" : "Desativado");
      },
      []
    );

  useEffect(() => {
    const doc = document.getElementById(`${module.id}`)
    if (!doc) return
    doc.style.height = expanded ? doc.scrollHeight + 'px' : '0px'
  }, [expanded])

  return (
    <div>
      <p className='module-title d-flex align-items-center' onClick={() => setExpanded((previous) => !previous)}>
        <i
          className={`fas ${expanded ? "fa-caret-up" : "fa-caret-down"} font-size-16 align-middle me-2`}
        />
        {module.name}
        
        <Dropdown
            isOpen={isDropdwownOpen}
            toggle={() => setIsDropdownOpen((previous) => !previous)}
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
            }}
          >
            <DropdownToggle className="btn btn-light">
              <i className="fas fa-ellipsis-v" />
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem onClick={() => fullscreenHandle.enter()}>
                <i
                  title='Visualizar Módulo'
                  className="fas fa-eye font-size-16 align-middle me-2"
                  />
                  Visualizar Módulo
              </DropdownItem>
              <DropdownItem onClick={() => {}}>
                <i
                  title='Editar Módulo'
                  className="fas fa-pen  font-size-16 align-middle me-2"
                  />
                  Editar Módulo
              </DropdownItem>
              <DropdownItem onClick={() => {removeModulo(module.id)}}>
                <i
                  title='Deletar Módulo'
                  className="fas fa-trash font-size-16 align-middle me-2 delete-tv-icon"
                  
                  />
                  Deletar Módulo
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
      </p>
      <div id={`${module.id}`} className={`module-children ${expanded ? 'expanded' : 'closed'}`}>
        {
          module.children.map((vision, index) => (
            <div key={vision.id} className="form-check form-check-success mb-3">
              <input
                type="checkbox"
                className="form-check-input"
                id={`${vision.name}-${module.id}`}
                checked={vision.isActive}
                onChange={() => {
                  updateVision(module.id, vision.id, { isActive: !vision.isActive });
              }}
              />
              <label
                className="form-check-label"
                htmlFor={`${vision.name}-${module.id}`}
              >
                {vision.name}
              </label>
              <>
                <Input
                  name="firstname"
                  type="text"
                  className="form-control d-inline"
                  id="horizontal-firstname-Input"
                  placeholder="0"
                  value={vision.seconds}
                  style={{ width: 70, height: 20, marginLeft: 15, marginRight: 5 }}
                  onChange={(e) => {
                    let newSeconds = parseInt(e.target.value, 10) || 10;
                    newSeconds = newSeconds <= 5 ? 5 : newSeconds
                    updateVision(module.id, vision.id, { seconds: newSeconds });
                }}
                />
                <span>seg.</span>
              </>
            </div>
          ))
        }
      </div>
      <FullScreen handle={fullscreenHandle} onChange={reportChange}>
        {
          fullscreenHandle.active && (
            <div style={{ width: "100%", height: "100%" }} id="full-screen">
              <div className="page-content">
                <h4>metas</h4>
                <BIShowcase screens={module.children} fullscreenHandle={fullscreenHandle} />
              </div>
            </div>
          )}
      </FullScreen>
    </div>
  )

}

export default TvModeConfig;
