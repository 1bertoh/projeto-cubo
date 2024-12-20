import Breadcrumb from 'Components/Common/Breadcrumb'
import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import { Card, CardBody, CardTitle, Col, Collapse, Form, Input, Label, Row } from 'reactstrap'
import * as Yup from 'yup'
import { dashes } from './_data'
import classNames from 'classnames'
import "./index.scss"
import { FaSquare, FaCheckSquare, FaMinusSquare } from "react-icons/fa";
import { IoMdArrowDropright } from "react-icons/io";
import TreeView, { flattenTree, INode } from "react-accessible-treeview";
import cx from "classnames";
import { IFlatMetadata } from 'react-accessible-treeview/dist/TreeView/utils'

type Props = {}

type TTV = {
  name: string;
  modulo: TModulo[]
}

type TModulo = {
  dashes: {
    name: string;
    dashs: { name: string, duration: number }[];
    users_allowed: string[]
  }[]
}

const TvModeConfig = (props: Props) => {
  const [TVs, setTVs] = useState<{ name: string, modulos: INode<IFlatMetadata>[] }[]>([{ name: "TV1", modulos: dataTV }])

  const addTV = () => {
    setTVs((previous) => {
      // Cria uma nova TV com estrutura válida
      const newTV = {
        name: "Nova TV",
        modulos: flattenTree({
          name: "",
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
          ]
        })
      }

      return [...previous, newTV]; // Adiciona a nova TV à lista existente
    });
  };

  useEffect(() => {
    console.log(TVs, 'tvs')
  }, [TVs])


  return (
    // <React.Fragment>
    <div className='page-content'>
      <Breadcrumb title="Modo Tv" breadPath={[{ link: "#", name: "Modo TV" }, { link: "#", name: "Configuração" }]} />
      <div>
        <Card>
          <CardBody>
            <CardTitle className="h4 mb-4 d-flex justify-content-between" >
              <span>
                Configurar Modo TV
              </span>
              <button
                onClick={() => addTV()}
                type="button"
                className="btn btn-primary "
              >
                <i className="fas fa-plus font-size-16 align-middle me-2"></i>{" "}
                Criar
              </button>
            </CardTitle>
            {
              TVs.map((tv) => (<TV tv={tv} />))
            }
          </CardBody>
        </Card>
      </div>
    </div>
    // </React.Fragment>
  )
}

const TV = (props: { tv: { name: string, modulos: INode<IFlatMetadata>[] } }) => {
  const { tv } = props
  const [col1, setcol1] = useState(true);

  const t_col1 = () => {
    setcol1(!col1);
  };

  const formik: any = useFormik({
    initialValues: {
      firstname: "",
      email: "",
      password: "",
      city: "",
      state: "",
      zip: "",
      check: ""
    },
    validationSchema: Yup.object({
      firstname: Yup.string().required("This field is required"),
      email: Yup.string().email().matches(/^(?!.*@[^,]*,)/).required("Please Enter Your Email"),
      password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .matches(RegExp('(.*[a-z].*)'), 'At least lowercase letter')
        .matches(RegExp('(.*[A-Z].*)'), 'At least uppercase letter')
        .matches(RegExp('(.*[0-9].*)'), 'At least one number')
        .required("This field is required"),
      city: Yup.string().required("This field is required"),
      state: Yup.string().required("This field is required"),
      zip: Yup.string().required("This field is required"),
      check: Yup.string().required("This field is required"),
    }),

    onSubmit: (values: any) => {
      // console.log("value", values.password);
    },
  });

  return (
    <>
      <div>
        <div className="checkbox">
          <h4>{tv.name}</h4>
          <TreeViewComponent data={tv.modulos} />
        </div>
      </div>
    </>
  )
}

export default TvModeConfig

let dataTV = flattenTree({
  name: "",
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
    {
      id: "one",
      name: "Modulo 02",
      children: [
        { name: "Estoque", id: 7 },
        { name: "Faturamento", id: 12 },
      ],
    },
    {
      id: 42,
      name: "Modulo 03",
      children: [
        { name: "Estoque", id: 672 },
        { name: "Faturamento", id: 13 },
      ],
    },
  ],
});

function DataTypes() {
  return (
    <div>
      <div className="checkbox">

        <h4>TV1</h4>
        <TreeViewComponent data={dataTV} />
      </div>
    </div>
  );
}

function TreeViewComponent({ data }) {
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
        isSelected,
        isHalfSelected,
        getNodeProps,
        level,
        handleSelect,
        handleExpand,
      }) => {
        return (
          <div
            {...getNodeProps({ onClick: handleExpand })}
            style={{ marginLeft: 40 * (level - 1) }}
            className={`${!isBranch ? "d-flex align-items-center gap-1 py-1" : ""}`}
          >
            {isBranch && <ArrowIcon isOpen={isExpanded} />}
            <CheckBoxIcon
              className="checkbox-icon"
              onClick={(e) => {
                handleSelect(e);
                e.stopPropagation();
              }}
              variant={isHalfSelected ? "some" : isSelected ? "all" : "none"}
            />
            <span className={`name ${!isBranch ? "d-flex align-items-center" : ""}`}>
              <span className={`name ${!isBranch ? "" : "fs-4"}`}>{element.name}</span>
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
        );
      }}
    />
  );
}

type props = {
  isOpen?: boolean;
  className?: string
}

const ArrowIcon = (props: props) => {
  const { className, isOpen } = props
  const baseClass = "arrow";
  const classes = cx(
    baseClass,
    { [`${baseClass}--closed`]: !isOpen },
    { [`${baseClass}--open`]: isOpen },
    className
  );
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
