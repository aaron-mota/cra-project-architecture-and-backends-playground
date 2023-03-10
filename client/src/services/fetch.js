///////////////////
// HELPER FUNCTIONS
///////////////////
const handleResponseType = async (response) => {
  const text = await response.text()
  try{
    const json = JSON.parse(text)
    return json
  } catch(err) {
    return text
  }
}


///////////////////
// MAIN
///////////////////

// SINGLE
///////////////////


// CREATE
export const createDoc = async (doc, collection, controller, consoleLog = false) => {
  let response = await fetch(`/${collection}`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({doc: doc}),
    signal: controller.signal
  })
  response = await handleResponseType(response)
  if (consoleLog) {
    console.log(`createDoc (${collection}): `, response)
  }
  return response
}

// READ
export const getDoc = async (id, collection, controller, consoleLog = false) => {
  let response = await fetch(`/${collection}/${id}`, {signal: controller.signal})
  response = await handleResponseType(response)
  if (consoleLog) {
    console.log(`getDoc (${collection}): `, response)
  }
  return response
}

// UPDATE
export const updateDoc = async (doc, collection, controller, consoleLog = false) => {
  let response = await fetch(`/${collection}/${doc.id}`, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({doc: doc}),
    signal: controller.signal
  })
  response = await handleResponseType(response)
  if (consoleLog) {
    console.log(`updateDoc (${collection}): `, response)
  }
  return response
}

// DELETE
export const deleteDoc = async (id, collection, controller, consoleLog = false) => {
  let response = await fetch(`/${collection}/${id}`, {method: 'DELETE', signal: controller.signal})
  response = Boolean(await handleResponseType(response))
  if (consoleLog) {
    console.log(`deleteDoc (${collection}): `, typeof response, response)
  }
  return response
}


// MANY
///////////////////

// GET MANY
export const getDocs = async (collection, controller, consoleLog = false) => {
  let response = await fetch(`/${collection}`, {signal: controller.signal})
  response = await handleResponseType(response)
  if (consoleLog) {
    console.log(`getDocs (${collection}): `, typeof response, response)
  }
  return response
}
