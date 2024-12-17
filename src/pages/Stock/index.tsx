import Breadcrumb from 'Components/Common/Breadcrumb'
import React, { useEffect, useState } from 'react'
import { Container } from 'reactstrap'
import dados, { TDados } from './dados'
import StockColumn from './_stockColumn'
import { APIClient } from '../../helpers/api_helper'
import StockView from './stockView'
// import {axios as axiosFetch} from 'axios'

type Props = {}

const Stock = (props: Props) => {

  // useEffect(() => {
  //   const api = new APIClient();
  //   console.log('resposta1')
  //   const fetch = async () => {
  //     console.log('resposta2')
  //     const res: { dados: TDados[] } = await api.get('http://127.0.0.1:8000/consulta3', '')

  //     setResponse(() => processData(res.dados))
  //   }

  //   fetch()
  // }, [])

 

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumb title="Stock" breadcrumbItem="Stock" />
          <StockView/>
        </Container>
      </div>
    </React.Fragment >
  )
}

export default Stock