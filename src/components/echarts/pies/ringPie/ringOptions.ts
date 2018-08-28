const ringTestData = [
    {value: 100, name: 'test1'},
    {value: 50, name: 'test2'},
    {value: 50, name: 'test3'},
]
function createRingOption(data:any[] = ringTestData) {
    const legendData = data.map(item => item.name)
    const seriesData = data.sort( (a, b)  => a.value - b.value)
    const colors = [
        'rgba(255, 88, 111, 1)',
        'rgba(41,209,254,1)',
        'rgba(239, 230, 91, 1)',
        'rgba(252, 189, 0, 1)',
        'rgba(134, 72, 0, 1)'
    ]
    const options = {
        backgroundColor: '#fff',
        title: {
            text: 'ring Pie',
            left: 'center',
            top: 20,
            textStyle: {
                color: '#ccc'
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: "{b} : {d}% <br/> {c}"
        },
        // graphic: {
        //     elements: [{
        //         type: 'image',
        //         style: {
        //             image: giftImageUrl,
        //             width: 100,
        //             height: 100
        //         },
        //         left: 'center',
        //         top: 'center'
        //     }]
        // },
        legend: {
            orient: 'vertical',
            icon: 'circle',
            y: 'center',
            right: 10,
            textStyle: {
                color: '#333'
            },
            data: legendData
        },
        series: [{
            type: 'pie',
            radius: ['40%', '50%'],
            center: ['50%', '50%'],
            color: colors,
            data: seriesData,
        }]
    };
    return options
}

export default createRingOption