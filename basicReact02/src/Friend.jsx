export default function Friend({ friend }) {
    // console.log(friend);
    const { name, email, username, address, city } = friend;
    return (
      <div className="box">
        <h4>Name : {name} </h4>
        <p>E-mail : {email} </p>
        <p>User-name : {username} </p>
        <p>Address : {address.street} </p>
        <p>City : {address.city} </p>
      </div>
    );
}