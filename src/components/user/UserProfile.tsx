
interface Geo {
  lat: string;
  lng: string;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

interface UserProfileProps {
  user: User;
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    fontFamily: 'Arial, sans-serif',
    margin: '20px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    maxWidth: '600px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)'
  },
  header: {
    textAlign: 'center',
    color: '#333'
  },
  section: {
    marginBottom: '20px'
  },
  subHeader: {
    color: '#555',
    borderBottom: '1px solid #ccc',
    paddingBottom: '5px'
  }
};

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  return (
    <div style={styles.container}>
      <h2 style={styles.header}>User Profile</h2>
      <div style={styles.section}>
        <h3 style={styles.subHeader}>Personal Information</h3>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Website:</strong> <a href={`http://${user.website}`}>{user.website}</a></p>
      </div>
      <div style={styles.section}>
        <h3 style={styles.subHeader}>Address</h3>
        <p><strong>Street:</strong> {user.address.street}</p>
        <p><strong>Suite:</strong> {user.address.suite}</p>
        <p><strong>City:</strong> {user.address.city}</p>
        <p><strong>Zipcode:</strong> {user.address.zipcode}</p>
        <p><strong>Geo:</strong> {`Lat: ${user.address.geo.lat}, Lng: ${user.address.geo.lng}`}</p>
      </div>
      <div style={styles.section}>
        <h3 style={styles.subHeader}>Company</h3>
        <p><strong>Name:</strong> {user.company.name}</p>
        <p><strong>Catch Phrase:</strong> {user.company.catchPhrase}</p>
        <p><strong>Business:</strong> {user.company.bs}</p>
      </div>
    </div>
  );
}

export default UserProfile;
