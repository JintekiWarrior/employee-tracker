const { prompt } = require("inquirer")
const departmentRoutes = require('./routes/departmentRoutes')
const fetch = require("cross-fetch")
require("console.table")

// Index Departments
const viewDepartments = () => {
  fetch('http://localhost:3001/departments')
    .then(res => {
      return res.json()
    })
    .then(data => {
      console.log(data)
    })
}

// Show Department
const getADepartment = (id) => {
  fetch(`http://localhost:3001/department/${id}`)
    .then(res => res.json())
    .then(data => console.log(data))
}

// Create Department
const createADepartment = (name) => {
  const obj = { name }
  fetch('http://localhost:3001/department', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(obj)
  })
    .then(res => res.json())
    .then(data => console.log(data))
}
const str = "testDepart"
createADepartment(str)

