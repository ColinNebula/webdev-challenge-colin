const { Post } = require('../models');

const postdata = [
    {
        date: '2013/12/1',
        category: 'Construction',
        lot_title: 'Hauling Transfer Trailers',
        lot_location: '783 Park Ave New York NY 10021',
        lot_condition: 'Brand New',
        pre_tax_amount: '350',
        tax_name: 'NY Sales tax',
        tax_amount: '31.06',
        user_id: 14
    },
    {
        date: '2013/12/15',
        category: 'Construction',
        lot_title: 'Roll-of trucks',
        lot_location: '1 Infinite Loop Cupertino CA 95014',
        lot_condition: 'Like Brand New',
        pre_tax_amount: '235',
        tax_name: 'CA Sales tax',
        tax_amount: '17.63',
        user_id: 2
    },
    {
        date: '2013/12/31',
        category: 'Construction',
        lot_title: 'End dumps',
        lot_location: '1 Infinite Loop Cupertino CA 95014',
        lot_condition: 'Used',
        pre_tax_amount: '999',
        tax_name: 'CA Sales tax',
        tax_amount: '74.93',
        user_id: 3
    },
    {
        date: '2013/12/1',
        category: 'Construction',
        lot_title: 'Skid steer loaders',
        lot_location: '1 Infinite Loop Cupertino CA 95014',
        lot_condition: 'For parts or not working',
        pre_tax_amount: '899',
        tax_name: 'CA Sales tax',
        tax_amount: '67.43',
        user_id: 1
    },
    {
        date: '2013/12/6',
        category: 'Construction',
        lot_title: 'Bobtail dump trucks',
        lot_location: '1600 Amphitheatre Parkway, Mountain View, CA 94043',
        lot_condition: 'Brand New',
        pre_tax_amount: '21000.54',
        tax_name: 'CA Sales tax',
        tax_amount: '1575.04',
        user_id: 5
    }
    
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;