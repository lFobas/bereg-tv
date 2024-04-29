import React from 'react'

const TableTaryf = () => {
  return (
    <div className="overflow-x-auto flex justify-center items-center w-4/5">
        <table className="table  flex justify-between">
            <thead>
            <tr className='text-white'>
                <th></th>
                <th>Назва</th>
                <th>Ціна</th>

            </tr>
            </thead>
            <tbody>
            <tr>
                <th>1</th>
                <td>Стандарт</td>
                <td>160 грн/міс</td>

            </tr>
            {/* row 2 */}
            <tr>
                <th>2</th>
                <td>Для Готелів</td>
                <td>*індивідуально*</td>
            </tr>
            {/* row 3 */}
            <tr>
                <th>3</th>
                <td>Підключення</td>
                <td>500 грн</td>
            </tr>
            </tbody>
        </table>
    </div>
  )
}

export default TableTaryf