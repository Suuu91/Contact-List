import { useState } from "react"

import ContactList from "./components/contactlist.jsx"
import SingleContact from "./components/single-contact-list.jsx"

const App = () => { 

  const [singleList, setSingleList] = useState({})
  const [singleDetail, setSingleDetail] = useState(true)

  return (
    <>
      <h1>Contact List</h1>

      {
        singleDetail ?
        <ContactList 
          setSingleList = {setSingleList}
          setSingleDetail = {setSingleDetail}
          />:
        <SingleContact 
          singleList = {singleList} 
          setSingleDetail = {setSingleDetail}
          />
      }
    </>
  )
}

export default App
