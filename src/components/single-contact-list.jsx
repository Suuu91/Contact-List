const singleContact = ({singleList, setSingleDetail}) => {
  const { name, email, phone, address, website } = singleList

  return (
    <>
      <h2>Name: {name}</h2>
      <h2>Email: {email}</h2>
      <h2>Phone: {phone}</h2>
      <h2>Website: {website}</h2>
      <h2>Address: {address.street} {address.suite} {address.city} {address.zipcode}</h2>
      <button onClick = {() => {
        setSingleDetail(true)
      }}
      >Back to All</button>
    </>
  )
}

export default singleContact
