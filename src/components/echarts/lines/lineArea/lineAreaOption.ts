function createLineAreaOption() {
    const options = {
            xAxis: {
                type: 'category',
                boundaryGap: false,
                splitLine: {
                    show: false
                },
                data: ['00:00', '04:00', '08:00' ,'12:00', '16:00', '20:00', '24:00']
            },
            yAxis: {
                type: 'value',
                splitLine: {
                    show: false
                }
            },
            series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line',
                smooth: true,
                areaStyle: {}
            }]
        };
    return options
}

export default createLineAreaOption