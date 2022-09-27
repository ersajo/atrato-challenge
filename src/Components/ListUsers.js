import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { CardInfo } from './CardInfo';

export const ListUsers = () => {
  const [users, setUsers] = useState([]);

  const getFullName = (user) => {
    let fullName = user.name;
    if (user.middleName) fullName += ' ' + user.middleName;
    fullName += ' ' + user.fLastName + ' ' + user.sLastName
    return fullName;
  }

  const getExpirationDate = (expirationDateString) => {
    const splitDate = expirationDateString.split('-');
    return splitDate[1] + '/' + splitDate[0].slice(2,4);
  }

  useEffect(() => {
    axios.get('http://localhost:4000/users').then(async res => {
      const retrievedData = await res.data.map(user => {
        const userInfo = {
          ...user,
          fullName: getFullName(user),
        }
        userInfo.cardInfo.expirationDate = getExpirationDate(user.cardInfo.expiration)
        return userInfo;
      });
      setUsers(retrievedData)
    });
  }, [])

  return (
    <>
      <div className='text-3xl p-10'>Users</div>
      <div className='flex justify-center flex-wrap'>
        {
          users.map((user) => 
            <CardInfo user={user}/>
          )
        }
      </div>
    </>
  )
}