/**
* Posts
* @namespace ncs.collections.services
*/
(function () {
	'use strict';

	angular
		.module('oipa.budget')
		.factory('Budget', Budget);

	Budget.$inject = ['$http'];

	/**
	* @namespace Filters
	* @returns {Factory}
	*/
	function Budget($http) {
		var m = this;
		m.budget = {
          on: true,
	      value: [0,1500000000]
	    };
        m.toReset = false;
		

		var Budget = {
            budget: m.budget,
            toReset: m.toReset,
			all: all 
		};

		return Budget;



		////////////////////


		/**
         * @name all
         * @desc Try to get all countries
         * @returns {Promise}
         * @memberOf oipa.countries.services.Countries
         */
        function all() {
        	return m.budget;
        }
	}
})();