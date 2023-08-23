//
// External dependencies


// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

//////////////////////////////
////////   Versions   ////////
//////////////////////////////
router.use('discovery-alpha/v6-2', require('./views/discovery-alpha/v6-2/_routes'));
router.use('discovery-alpha/v6', require('./views/discovery-alpha/v6/_routes'));
router.use('discovery-alpha/v5', require('./views/discovery-alpha/v5/_routes'));
//router.use('/ccs', require('./views/css/_routes'));
router.use('discovery-alpha/v4', require('./views/discovery-alpha/v4/_routes'));
router.use('discovery-alpha/v3', require('./views/discovery-alpha/v3/_routes'));
router.use('discovery-alpha/v2', require('./views/discovery-alpha/v2/_routes'));
router.use('discovery-alpha/v1', require('./views/discovery-alpha/v1/_routes'));




module.exports = router;
