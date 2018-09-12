// Load environment variables from .env file if available
require('dotenv').load();

var config = {
    env:  'prod',

    host: '0.0.0.0',
    port: process.env.PORT || 5000,

    theme: 'night-blue',

    // clients configs
    api: {
      github: {
        token: 'TOKEN'
      }
    },

    // define duration between each dashboard rotation (ms)
    rotationDuration: 8000,

    // define the interval used by Mozaïk Bus to call registered APIs
    apisPollInterval: 600000,

    dashboards: [
        // first dashboard
        {
            // 4 x 3 dashboard
            columns: 4,
            rows:    3,
            widgets: [
              {
                  type: 'github',
                  repository: 'plouc/mozaik',
                  columns: 1, rows: 1,
                  x: 2, y: 0
              }
            ]
        },
    ]
};

module.exports = config;
