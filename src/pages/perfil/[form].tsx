import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import { Owner } from '../../components/UpdateForms/Owner'
import { InfoBusiness } from '../../components/UpdateForms/InfoBusiness'
import { AddressBusiness } from '../../components/UpdateForms/AddressBusiness'
import { DetailsBusiness } from '../../components/UpdateForms/DetailsBusiness'

import { UserLoggedContext } from '../../contexts/UserLoggedContext'

import styles from '../../styles/update.module.scss'
import { ArrowBack } from '@material-ui/icons'

export default function FormEdit() {
  const { userData, updateUserData, userUpdateLoading, salonData } =
    React.useContext(UserLoggedContext)

  const router = useRouter()

  if (!userData || !salonData) {
    return <p>Loading...</p>
  }

  const currentFormName = router.query.form as string

  const forms = {
    owner_update: (
      <Owner
        initialValues={userData}
        updateUser={updateUserData}
        userUpdateLoading={userUpdateLoading}
      />
    ),
    infoBusiness_update: <InfoBusiness />,
    addressBusiness_update: <AddressBusiness />,
    detailsBusiness_update: <DetailsBusiness />,
  }

  const form = currentFormName && forms[currentFormName]

  return (
    <div className={styles.container}>
      <div className={styles.updateForm}>
        <Link href="/perfil">
          <ArrowBack />
        </Link>
        <h2>Dado de Formulario</h2>
      </div>
      {form && form}
    </div>
  )
}
