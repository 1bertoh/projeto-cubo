import Breadcrumb from 'Components/Common/Breadcrumb'
import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import { Card, CardBody, CardTitle, Input } from 'reactstrap'
import * as Yup from 'yup'
import "./index.scss"
import { FaSquare, FaCheckSquare, FaMinusSquare } from "react-icons/fa";
import { IoMdArrowDropright } from "react-icons/io";
import TreeView, { flattenTree, INode } from "react-accessible-treeview";
import cx from "classnames";

type TRawTVData = {
  name: string;
  id: number | string;
  children: {
      id: string | number;
      name: string;
      children: {
          name: string;
          id: number | string;
      }[];
  }[];
}[]

const TvModeConfig = () => {
  const [rawTVData, setRawTVData] = useState<TRawTVData>([
    {
      name: "TV1",
      id: 890,
      children: [
        {
          id: "data-string",
          name: "Modulo 01",
          children: [
            { name: "Estoque", id: 690 },
            { name: "Faturamento", id: 1001 },
          ],
        },
      ],
    },
  ]);

  const [TVs, setTVs] = useState<INode[][]>([]);

  useEffect(() => {
    setTVs(() => rawTVData.map((data) => flattenTree(data)));
  }, [rawTVData]);

  const addTV = () => {
    setRawTVData((prev) => {
      const newTV = {
        name: `Nova TV ${prev.length + 1}`,
        id: Date.now(),
        children: [],
      };
      return [...prev, newTV];
    });
  };

  const deleteTV = (index: number) => {
    setRawTVData((prev) => prev.filter((_, i) => i !== index));
  };

  const addModulo = (indexTV: number) => {
    setRawTVData((prev) => {
      const updatedTVs = [...prev];
      const tv = updatedTVs[indexTV];
      const id = Date.now();
      const newModulo = {
        name: `Módulo ${tv.children.length + 1}`,
        id,
        children: [
          { name: "Estoque", id: `Estoque-${id}` },
          { name: "Faturamento", id: `Faturamento-${id}` },
        ],
      };
      tv.children.push(newModulo);
      return updatedTVs;
    });
  };

  const removeModulo = (indexTV: number, moduloId: number | string) => {
    setRawTVData((prev) => {
      const updatedTVs = [...prev];
      updatedTVs[indexTV].children = updatedTVs[indexTV].children.filter((modulo) => modulo.id !== moduloId);
      return updatedTVs;
    });
  };

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
              />
            ))}
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

const TV = ({ tv, addModulo, deleteTV, removeModulo, index }) => {
  return (
    <div>
      <div className="checkbox">
        <h4>
          {tv[0]?.name}
          <span>
            <i
              title='Adicionar Módulo'
              className="fas fa-plus font-size-16 align-middle me-2 add-tv-icon"
              onClick={() => addModulo(index)}
            />
            <i
              title='Deletar TV'
              className="fas fa-trash font-size-16 align-middle me-2 delete-tv-icon"
              onClick={() => deleteTV(index)}
            />
          </span>
        </h4>
        <TreeViewComponent data={tv} removeModulo={(moduloId) => removeModulo(index, moduloId)} />
      </div>
    </div>
  );
};

const TreeViewComponent = ({ data, removeModulo }) => {
  return (
    <TreeView
      data={data}
      aria-label="Data type Map tree"
      multiSelect
      propagateSelect
      propagateSelectUpwards
      togglableSelect
      nodeRenderer={({
        element,
        isBranch,
        isExpanded,
        isHalfSelected,
        isSelected,
        getNodeProps,
        handleSelect,
        level,
      }) => (
        <div
          {...getNodeProps()}
          style={{ marginLeft: 40 * (level - 1) }}
          className="d-flex align-items-center gap-1 py-1">
          {isBranch && <ArrowIcon isOpen={isExpanded} />}
          <CheckBoxIcon //Dar um jeito de quando abrir os subitems não selecionar todos os checkbox
              className="checkbox-icon"
              onClick={(e) => {
                handleSelect(e);
                e.stopPropagation();
              }}
              variant={isHalfSelected ? "some" : isSelected ? "all" : "none"}
            />
          <span className="name d-flex">
            {element.name}
            {isBranch && (
              <i
                title='Remover Módulo'
                className='fas fa-trash font-size-16 align-middle me-2 remove-modulo-icon'
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  removeModulo(element.id);
                }}
              ></i>
            )}
            {
                !isBranch && (
                  <>
                    <Input
                      name="firstname"
                      type="text"
                      className="form-control"
                      id="horizontal-firstname-Input"
                      placeholder="0"
                      style={{ width: 70, height: 30, marginLeft: 15, marginRight: 5 }}
                    />
                    <span>seg.</span>
                  </>
                )
              }
          </span>
        </div>
      )}
    />
  );
};


const ArrowIcon = ({ isOpen }) => {
  const baseClass = "arrow";
  const classes = cx(baseClass, { [`${baseClass}--closed`]: !isOpen, [`${baseClass}--open`]: isOpen });
  return <IoMdArrowDropright className={classes} />;
};

const CheckBoxIcon = ({ variant, ...rest }) => {
  switch (variant) {
    case "all":
      return <FaCheckSquare {...rest} />;
    case "none":
      return <FaSquare {...rest} />;
    case "some":
      return <FaMinusSquare {...rest} />;
    default:
      return null;
  }
};

export default TvModeConfig;
