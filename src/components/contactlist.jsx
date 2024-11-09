import { useState, useEffect } from "react";

const contactList = ({setSingleList, setSingleDetail}) => {
  const [contacts, setContacts] = useState([])

  useEffect(() => {
    const getContacts = async () => {
      const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users`)
      const receivedContact = await response.json()
      // console.log (receivedContact) 
      setContacts(receivedContact)
    }
    getContacts()
  }, [])
    
  const userClicked = (user) => {
    setSingleList(user)
    setSingleDetail(false)
  }

  return(
    <section>
      <section id = "header">
        <h2>Name</h2>
        <h2>Email</h2>
        <h2>Phone</h2>
      </section>

      <section id = "contact-info">
        {
          contacts.map((singleContact) => {
            return (
              <>
              <section 
                className = "info"
                onClick = {() => {
                  userClicked(singleContact)}
                }
              > 
                <li>{singleContact.name}</li>
                <li>{singleContact.email}</li>
                <li>{singleContact.phone}</li>
              </section>
              </>
            )
          })
        }
      </section>
    </section>
  )
}

export default contactList