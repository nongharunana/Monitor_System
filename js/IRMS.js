$(document).ready(function() {
    var options = {
        chart: {
            renderTo: 'IRMS',
            type: 'line',
            backgroundColor: 'transparent',
            style: {
                fontFamily: 'Unica One'
            }
        },
        colors: ['#FDD692', '#EC7357', '#06D6A0', '#9CAFB7', '#B97375', '#F1E4E8', '#D8CC34', '#EF476F', '#F1A208', '#118AB2', '#922D50', '#574D68'],
        title: {
            text: ' ',
            style: {
                color: '#D9E5D6',
                fontWeight: 'normal',
                fontFamily: "Unica One",
            },
        },
        yAxis: {
            title: {
                text: 'IRMS(Ampere)',
                style: {
                    color: '#D9E5D6',
                    fontWeight: 'normal',
                    fontFamily: 'Unica One',
                    fontSize: '11pt'
                }
            },
            labels: {
                style: {
                    color: 'white'
                }
            }
        },
        xAxis: {
            categories: [],
            labels: {
                rotation: -90,
                step: 5,
                style: {
                    color: 'white',
                    fontWeight: 'normal',
                    fontFamily: '"Unica One"',
                    fontSize: '8pt'
                }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            itemHoverStyle: {
                color: '#832232'
            },
            itemStyle: {
                color: '#7F786E'
            }
        },
        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },
            }
        },
        series: [{
            name: 'device1',
            data: []
        }, {
            name: 'device2',
            data: []
        }, {
            name: 'device3',
            data: []
        }, {
            name: 'device4',
            data: []
        }, {
            name: 'device5',
            data: []
        }, {
            name: 'device6',
            data: []
        }, {
            name: 'device7',
            data: []
        }, {
            name: 'device8',
            data: []
        }, {
            name: 'device9',
            data: []
        }, {
            name: 'device10',
            data: []
        }, {
            name: 'device11',
            data: []
        }, {
            name: 'device12',
            data: []
        }],
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        }
    };
    var chart = new Highcharts.Chart(options)
    getTrafficVPN_1_Data();
    setInterval(function() {
        getTrafficVPN_1_Data()
    }, 4000);

    function getTrafficVPN_1_Data() {
        var d = new Date();
        var t = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
        options.xAxis.categories.push(t)
        $.ajax({
            url: 'https://addmao.wot.box-box.space/things/netsense-1/properties/IRMS',
            method: "GET",
            headers: {
                Authorization: "Bearer" + " eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjA5YzZlMmMxLTFjMjItNGI2ZS1hMWRlLWRkZGFiNTU2YTc3MSJ9.eyJyb2xlIjoidXNlcl90b2tlbiIsImlhdCI6MTUzMTk2NzU3NX0.eeZRGFVabyh9-jLIqNVwdqE_S3fEKE4FyMuaEPJ_Re5ljTNKsCjt7yVvF_XZtfkYycGmNiIdeIjCLRFkfdy7Rg",
                Accept: 'application/json',
                "Content-Type": "application/json",
            },
        }).then(function(data) {
            options.series[0].data.push(data.IRMS);
             chart.series[0].setData(options.series[0].data,true)

        }, function(err) {
            console.log('err', err);
        });
        $.ajax({
            url: 'https://addmao.wot.box-box.space/things/netsense-2/properties/IRMS',
            method: "GET",
            headers: {
                Authorization: "Bearer" + " eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjA5YzZlMmMxLTFjMjItNGI2ZS1hMWRlLWRkZGFiNTU2YTc3MSJ9.eyJyb2xlIjoidXNlcl90b2tlbiIsImlhdCI6MTUzMTk2NzU3NX0.eeZRGFVabyh9-jLIqNVwdqE_S3fEKE4FyMuaEPJ_Re5ljTNKsCjt7yVvF_XZtfkYycGmNiIdeIjCLRFkfdy7Rg",
                Accept: 'application/json',
                "Content-Type": "application/json",
            },
        }).then(function(data) {
            options.series[1].data.push(data.IRMS);
             chart.series[1].setData(options.series[1].data,true)

        }, function(err) {
            console.log('err', err);
        });
        $.ajax({
            url: 'https://addmao.wot.box-box.space/things/netsense-3/properties/IRMS',
            method: "GET",
            headers: {
                Authorization: "Bearer" + " eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjA5YzZlMmMxLTFjMjItNGI2ZS1hMWRlLWRkZGFiNTU2YTc3MSJ9.eyJyb2xlIjoidXNlcl90b2tlbiIsImlhdCI6MTUzMTk2NzU3NX0.eeZRGFVabyh9-jLIqNVwdqE_S3fEKE4FyMuaEPJ_Re5ljTNKsCjt7yVvF_XZtfkYycGmNiIdeIjCLRFkfdy7Rg",
                Accept: 'application/json',
                "Content-Type": "application/json",
            },
        }).then(function(data) {
            options.series[2].data.push(data.IRMS);
             chart.series[2].setData(options.series[2].data,true)

        }, function(err) {
            console.log('err', err);
        });
        $.ajax({
            url: 'https://addmao.wot.box-box.space/things/netsense-4/properties/IRMS',
            method: "GET",
            headers: {
                Authorization: "Bearer" + " eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjA5YzZlMmMxLTFjMjItNGI2ZS1hMWRlLWRkZGFiNTU2YTc3MSJ9.eyJyb2xlIjoidXNlcl90b2tlbiIsImlhdCI6MTUzMTk2NzU3NX0.eeZRGFVabyh9-jLIqNVwdqE_S3fEKE4FyMuaEPJ_Re5ljTNKsCjt7yVvF_XZtfkYycGmNiIdeIjCLRFkfdy7Rg",
                Accept: 'application/json',
                "Content-Type": "application/json",
            },
        }).then(function(data) {
            options.series[3].data.push(data.IRMS);
             chart.series[3].setData(options.series[3].data,true)

        }, function(err) {
            console.log('err', err);
        });
        $.ajax({
            url: 'https://addmao.wot.box-box.space/things/netsense-5/properties/IRMS',
            method: "GET",
            headers: {
                Authorization: "Bearer" + " eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjA5YzZlMmMxLTFjMjItNGI2ZS1hMWRlLWRkZGFiNTU2YTc3MSJ9.eyJyb2xlIjoidXNlcl90b2tlbiIsImlhdCI6MTUzMTk2NzU3NX0.eeZRGFVabyh9-jLIqNVwdqE_S3fEKE4FyMuaEPJ_Re5ljTNKsCjt7yVvF_XZtfkYycGmNiIdeIjCLRFkfdy7Rg",
                Accept: 'application/json',
                "Content-Type": "application/json",
            },
        }).then(function(data) {
            options.series[4].data.push(data.IRMS);
             chart.series[4].setData(options.series[4].data,true)

        }, function(err) {
            console.log('err', err);
        });
        $.ajax({
            url: 'https://addmao.wot.box-box.space/things/netsense-6/properties/IRMS',
            method: "GET",
            headers: {
                Authorization: "Bearer" + " eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjA5YzZlMmMxLTFjMjItNGI2ZS1hMWRlLWRkZGFiNTU2YTc3MSJ9.eyJyb2xlIjoidXNlcl90b2tlbiIsImlhdCI6MTUzMTk2NzU3NX0.eeZRGFVabyh9-jLIqNVwdqE_S3fEKE4FyMuaEPJ_Re5ljTNKsCjt7yVvF_XZtfkYycGmNiIdeIjCLRFkfdy7Rg",
                Accept: 'application/json',
                "Content-Type": "application/json",
            },
        }).then(function(data) {
            options.series[5].data.push(data.IRMS);
             chart.series[5].setData(options.series[5].data,true)

        }, function(err) {
            console.log('err', err);
        });
        $.ajax({
            url: 'https://addmao.wot.box-box.space/things/netsense-7/properties/IRMS',
            method: "GET",
            headers: {
                Authorization: "Bearer" + " eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjA5YzZlMmMxLTFjMjItNGI2ZS1hMWRlLWRkZGFiNTU2YTc3MSJ9.eyJyb2xlIjoidXNlcl90b2tlbiIsImlhdCI6MTUzMTk2NzU3NX0.eeZRGFVabyh9-jLIqNVwdqE_S3fEKE4FyMuaEPJ_Re5ljTNKsCjt7yVvF_XZtfkYycGmNiIdeIjCLRFkfdy7Rg",
                Accept: 'application/json',
                "Content-Type": "application/json",
            },
        }).then(function(data) {
            options.series[6].data.push(data.IRMS);
             chart.series[6].setData(options.series[6].data,true)

        }, function(err) {
            console.log('err', err);
        });
        $.ajax({
            url: 'https://addmao.wot.box-box.space/things/netsense-8/properties/IRMS',
            method: "GET",
            headers: {
                Authorization: "Bearer" + " eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjA5YzZlMmMxLTFjMjItNGI2ZS1hMWRlLWRkZGFiNTU2YTc3MSJ9.eyJyb2xlIjoidXNlcl90b2tlbiIsImlhdCI6MTUzMTk2NzU3NX0.eeZRGFVabyh9-jLIqNVwdqE_S3fEKE4FyMuaEPJ_Re5ljTNKsCjt7yVvF_XZtfkYycGmNiIdeIjCLRFkfdy7Rg",
                Accept: 'application/json',
                "Content-Type": "application/json",
            },
        }).then(function(data) {
            options.series[7].data.push(data.IRMS);
             chart.series[7].setData(options.series[7].data,true)

        }, function(err) {
            console.log('err', err);
        });
        $.ajax({
            url: 'https://addmao.wot.box-box.space/things/netsense-9/properties/IRMS',
            method: "GET",
            headers: {
                Authorization: "Bearer" + " eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjA5YzZlMmMxLTFjMjItNGI2ZS1hMWRlLWRkZGFiNTU2YTc3MSJ9.eyJyb2xlIjoidXNlcl90b2tlbiIsImlhdCI6MTUzMTk2NzU3NX0.eeZRGFVabyh9-jLIqNVwdqE_S3fEKE4FyMuaEPJ_Re5ljTNKsCjt7yVvF_XZtfkYycGmNiIdeIjCLRFkfdy7Rg",
                Accept: 'application/json',
                "Content-Type": "application/json",
            },
        }).then(function(data) {
            options.series[8].data.push(data.IRMS);
             chart.series[8].setData(options.series[8].data,true)

        }, function(err) {
            console.log('err', err);
        });
        $.ajax({
            url: 'https://addmao.wot.box-box.space/things/netsense-10/properties/IRMS',
            method: "GET",
            headers: {
                Authorization: "Bearer" + " eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjA5YzZlMmMxLTFjMjItNGI2ZS1hMWRlLWRkZGFiNTU2YTc3MSJ9.eyJyb2xlIjoidXNlcl90b2tlbiIsImlhdCI6MTUzMTk2NzU3NX0.eeZRGFVabyh9-jLIqNVwdqE_S3fEKE4FyMuaEPJ_Re5ljTNKsCjt7yVvF_XZtfkYycGmNiIdeIjCLRFkfdy7Rg",
                Accept: 'application/json',
                "Content-Type": "application/json",
            },
        }).then(function(data) {
            options.series[9].data.push(data.IRMS);
             chart.series[9].setData(options.series[9].data,true)

        }, function(err) {
            console.log('err', err);
        });
        $.ajax({
            url: 'https://addmao.wot.box-box.space/things/netsense-11/properties/IRMS',
            method: "GET",
            headers: {
                Authorization: "Bearer" + " eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjA5YzZlMmMxLTFjMjItNGI2ZS1hMWRlLWRkZGFiNTU2YTc3MSJ9.eyJyb2xlIjoidXNlcl90b2tlbiIsImlhdCI6MTUzMTk2NzU3NX0.eeZRGFVabyh9-jLIqNVwdqE_S3fEKE4FyMuaEPJ_Re5ljTNKsCjt7yVvF_XZtfkYycGmNiIdeIjCLRFkfdy7Rg",
                Accept: 'application/json',
                "Content-Type": "application/json",
            },
        }).then(function(data) {
            options.series[10].data.push(data.IRMS);
             chart.series[10].setData(options.series[10].data,true)

        }, function(err) {
            console.log('err', err);
        });
        $.ajax({
            url: 'https://addmao.wot.box-box.space/things/netsense-12/properties/IRMS',
            method: "GET",
            headers: {
                Authorization: "Bearer" + " eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjA5YzZlMmMxLTFjMjItNGI2ZS1hMWRlLWRkZGFiNTU2YTc3MSJ9.eyJyb2xlIjoidXNlcl90b2tlbiIsImlhdCI6MTUzMTk2NzU3NX0.eeZRGFVabyh9-jLIqNVwdqE_S3fEKE4FyMuaEPJ_Re5ljTNKsCjt7yVvF_XZtfkYycGmNiIdeIjCLRFkfdy7Rg",
                Accept: 'application/json',
                "Content-Type": "application/json",
            },
        }).then(function(data) {
            options.series[11].data.push(data.IRMS);
             chart.series[11].setData(options.series[11].data,true)

        }, function(err) {
            console.log('err', err);
        });
    }
});