const data = [{
        month: 'Jul',
        total: 1000,
    },
    {
        month: 'Aug',
        total: 3000,
    },
    {
        month: 'Sep',
        total: 2000,
    },
    {
        month: 'Oct',
        total: 2780,
    },
    {
        month: 'Nov',
        total: 1890,
    },
    {
        month: 'Dec',
        total: 2390,
    },
]

const trafficShares = [
    { id: 1, label: 'Desktop', value: 60, color: '#994ff3' },
    {
        id: 2,
        label: 'Mobile Web',
        value: 30,
        color: '#50c4cf',
    },
    {
        id: 3,
        label: 'Tablet Web',
        value: 10,
        color: '#fbdd74',
    },
]
const totalOrders = [
    { id: 1, label: 'Jul', orders: 550 },
    { id: 2, label: 'Aug', orders: 150 },
    { id: 3, label: 'Sep', orders: 450 },
    { id: 4, label: 'Oct', orders: 300 },
]

const employees = [{
        userId: 'krish',
        jobTitle: 'Developer',
        firstName: 'Krish',
        lastName: 'Lee',
        employeeCode: 'E1',
        region: 'CA',
        phoneNumber: 123456,
        emailAddress: 'krish.lee@learningcontainer.com',
    },
    {
        userId: 'devid',
        jobTitle: 'Developer',
        firstName: 'Devid',
        lastName: 'Rome',
        employeeCode: 'E2',
        region: 'CA',
        phoneNumber: '1111111',
        emailAddress: 'devid.rome@learningcontainer.com',
    },
    {
        userId: 'tin',
        jobTitle: 'Program Directory',
        firstName: 'Tin',
        lastName: 'jonson',
        employeeCode: 'E3',
        region: 'CA',
        phoneNumber: '2222222',
        emailAddress: 'tin.jonson@learningcontainer.com',
    },
]

export { data, trafficShares, totalOrders, employees }