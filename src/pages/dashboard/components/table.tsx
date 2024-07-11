import { DataTable } from "@/pages/shareComponent/tableComponent";
// import moment from 'moment';



const Table = () => {

    type RowType = {
        id: number;
        sn: string;
        name: string;
        tr: string;
        type: string;
        amount: string;
        date: string;
        status: string;
    };
    

    const columns = [
        {
          accessorKey: "sn",
          header: "S/N",
        },
        {
          accessorKey: "name",
          header: " Name",
          width: '30%'
         
        },
        {
          accessorKey: "tr",
          header: "Transaction Reference",
           width: '2%'
        },
        {
          accessorKey: "type",
          header: "Type",
      
        },
        {
          accessorKey: "amount",
          header: "Amount",
        },
        {
          accessorKey: "date",
          header: "Date           ",
        
        },
        {
            accessorKey: "status",
            header: "Status",
            cell: ({ row }) => {
                const status = row.original.status;
                let bgColor;
                if (status === 'Successful') bgColor = '#31D067';
                else if (status === 'Failed') bgColor = '#EA523D';
                else if (status === 'Pending') bgColor = '#FFA349';

                return (
                    <div style={{ display: 'flex', alignItems: 'center', backgroundColor: bgColor, padding: '0.1rem 0.5rem', borderRadius: '5rem', color: 'white', fontSize: '10px' }}>
                        <span style={{ display: 'inline-block', width: '8px', height: '8px', backgroundColor: 'white', borderRadius: '50%', marginRight: '0.5rem' }}></span>
                        {status}
                    </div>
                );
            }         
        },
        {
          accessorKey: "action",
          header: () => <div className="text-right">Action</div>,
          cell: ({ row }) => {
            return (
                <div className="flex items-center justify-center space-x-2">
                    <button className="bg-[#EC681C] text-white px-3 py-1 rounded text-[12px]">
                        View
                    </button>
                </div>
            );
          },
        },
    ];

    const rows: RowType[] = [
        {
            id: 1,
            sn: '0000001',
            name: 'Tife Balogun',
            tr: 'tanya.hill@example.com',
            type: 'Deposit',
            amount: '₦34,694.145',
            date: 'Dec 4, 2019 21:42',
            status: 'Successful'
        },
        {
            id: 2,
            sn: '0000002',
            name: 'Chidi Confidence',
            tr: 'csirconfy@gmail.com',
            type: 'Withdrawal',
            amount: '₦34,694.145',
            date: 'May 10, 2024 21:42',
            status: 'Failed'
        },
        {
            id: 3,
            sn: '0000003',
            name: 'Mr Johnson Emmanuel',
            tr: 'confidenceconfy@gmail.com',
            type: 'Payments',
            amount: '₦34,694.145',
            date: 'May 10, 2024 21:42',
            status: 'Pending'
        }
    ];
 
    return (
        <div>
            <DataTable columns={columns} data={rows}/>

            <div className="flex items-center justify-center space-x-2 mt-8">
                    <button className="bg-[#EC681C] text-white px-3 py-1 rounded  text-[14px] font-semibold ">
                        View All
                    </button>
                </div>
        </div>
    );
};

export default Table;
