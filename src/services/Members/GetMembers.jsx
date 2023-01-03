import axios from 'axios';
import { toast } from 'react-toastify';

const GetMembers = async (session) => {
  const ServerUrl = process.env.REACT_APP_SERVER_URL;

  try {
    const res = await axios.get(
      `${ServerUrl}/members/${session}`
    );
    return (res.data.members);
  } catch (err) {
    toast.error(err)
  }
}

export default GetMembers
