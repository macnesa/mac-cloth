
import { Table } from 'flowbite-react';

export default function Home() {

  return (
    <>
    <div>Homepage</div>
{/* 
      <div class="relative overflow-x-auto mt-10 ">
    <table class="w-full text-sm text-left text-black">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
                <th scope="col" class="px-6 py-3 w-5 ">
                    #
                </th>
                <th scope="col" class="px-6 py-3">
                    Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Description
                </th>
                <th scope="col" class="px-6 py-3">
                    Duration
                </th>
                <th scope="col" class="px-6 py-3">
                    
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="each,index in spotifyTopTracks.items" class="bg-white border-b">
                <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap">
                    x
                </th>
                <td class="px-6 py-2 flex ">
                  <img  width="50" height="50" alt=""/>
                  <div class="ml-2 p-0  grid  " >
                    <p class="font-bold top-0 text-[1.1rem] flex " >x</p>
                    <p class="self-end" >x</p>
                  </div>
                </td>
                <td class="px-6 py-2">
                 x
                </td>
                <td class="px-6 py-2">
                   x
                </td>
                <td>
                  <button  type="button" class=" mt-4 focus:outline-none text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Play</button>        
                  <button  class=" mt-4 focus:outline-none text-white bg-cyan-700 hover:bg-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2" >Download</button>   
                </td>
            </tr>
        </tbody>
    </table>
</div> */}

<div className='p-10'>
<Table hoverable={true}>
  <Table.Head>
    <Table.HeadCell>
      Name
    </Table.HeadCell>
    <Table.HeadCell>
      Color
    </Table.HeadCell>
    <Table.HeadCell>
      Category
    </Table.HeadCell>
    <Table.HeadCell>
      Price
    </Table.HeadCell>
    <Table.HeadCell>
      <span className="sr-only">
        Edit
      </span>
    </Table.HeadCell>
  </Table.Head>
  <Table.Body className="divide-y">
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        Apple MacBook Pro 17"
      </Table.Cell>
      <Table.Cell>
        Sliver
      </Table.Cell>
      <Table.Cell>
        Laptop
      </Table.Cell>
      <Table.Cell>
        $2999
      </Table.Cell>
      <Table.Cell>
        <a
          href="/tables"
          className="font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
          Edit
        </a>
      </Table.Cell>
    </Table.Row>
  </Table.Body>
</Table>
</div>
    </>

  );
}




