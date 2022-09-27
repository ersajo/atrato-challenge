import React from 'react'
import { FaSortDown, FaPen } from 'react-icons/fa';
import Icon from '../BlackIcon.png'
import './CardInfo.css'

export const CardInfo = ({user}) => {
  return (
    <div key={user?.id} className='flex flex border rounded w-2/3 p-4 bg-card drop-shadow-2xl m-4'>
      <div>
        <img className="inline-block h-12 w-12 m-2 rounded-full ring-2 ring-white" src={Icon} alt="" />
      </div>
      <div className='grow pl-4'>
        <div className='flex items-stretch content-center'>
          <div className='flex flex-col w-full'>
            <div className='flex justify-between'>
              <div className='userName text-xl font-bold'>{user?.fullName}</div>
              <div className='flex items-baseline statusDropdown rounded-lg text-white px-2 py-1'>
                <span className='mr-3'>ESTATUS</span>
                <FaSortDown />
              </div>
            </div>
            <div className='userId text-left'>
              <span className='mr-2'>ID:</span>{user?.id}
            </div>
          </div>
        </div>
        <div className='flex divide-x w-full'>
          <div className='w-2/3 flex flex-col pt-6'>
            <div className='pb-6 w-full flex flex-col justify-items-start'>
              <div className='userId flex items-start'>MAIL</div>
              <div className='flex items-start'>{user?.email}</div>
            </div>
            <div className='pb-6 w-full flex flex-col justify-items-start'>
              <div className='userId flex items-start'>FECHA DE NACIMIENTO</div>
              <div className='flex items-start'>{user?.birthday}</div>
            </div>
            <div className='pb-6 w-full flex flex-col justify-items-start'>
              <div className='userId flex items-start'>TELÉFONO</div>
              <div className='flex items-start'>{user?.phone}</div>
            </div>
            <div>
              <div className='userId flex items-start'>ANALISTA ASIGNADO</div>
              <div className='flex items-start'>{user?.assignedAnalyst}</div>
            </div>
          </div>
          <div className='w-1/3 p-6 h-full'>
            <div className='columnGray h-full rounded-md p-3'>
            <div className='pb-6 w-full flex flex-col justify-items-start'>
              <div className='userId flex items-start'>FULL NAME</div>
              <div className='flex items-start'>{user?.fullName}</div>
            </div>
            <div className='pb-6 w-full flex flex-col justify-items-start'>
              <div className='userId flex items-start'>CARD NUMBER</div>
              <div className='flex items-start'>{user?.cardInfo?.number}</div>
            </div>
            <div className='pb-6 w-full flex flex-col justify-items-start'>
              <div className='flex justify-between'>
                <div>
                  <div className='userId flex items-start'>CVV</div>
                  <div className='flex items-start'>{user?.cardInfo?.cvv}</div>
                </div>
                <div>
                  <div className='userId flex items-start'>PIN</div>
                  <div className='flex items-start'>{user?.cardInfo?.pin}</div>
                </div>
                <div>
                  <div className='userId flex items-start'>EXP</div>
                  <div className='flex items-start'>{user?.cardInfo?.expirationDate}</div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
        <div className='flex justify-end'>
          <div id='editButton' className='rounded-lg userId px-2 py-1 flex items-baseline hover:text-white'>
            <span className='mr-3'>Editar</span>
            <FaPen />
          </div>
        </div>
      </div>
    </div>
  )
}
