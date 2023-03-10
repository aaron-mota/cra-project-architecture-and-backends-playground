import { Button, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { UsersList } from './components/UsersList'
import ModalCreate from './components/ModalCreate'
import { makeSingular } from '../../utils/makeSingular'

export const collection = "users"

export default function Users() {
  const [createModalOpen, setCreateModalOpen] = useState(false)

  return (
    <>
      <Stack direction="row" gap={2} alignItems="center" sx={{mb: 2}}>
        <Typography variant="h4" component="h1">Users</Typography>
        <Stack justifyContent={"center"} alignItems="center">
          <Button
            variant="contained"
            onClick={() => setCreateModalOpen(true)}
          >
            Add {makeSingular(collection)}
          </Button>
        </Stack>
      </Stack>

      <UsersList />

      {createModalOpen && <ModalCreate open={createModalOpen} setOpen={setCreateModalOpen} />}
    </>
  )
}
