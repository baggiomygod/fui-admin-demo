
/**
 * 创建pie
 */
const defaultData = [
    {value:335, name:'test1'},
    {value:310, name:'test2'},
    {value:274, name:'test3'},
    {value:235, name:'test4'},
    {value:400, name:'test5'}
]
function createOptions(data: any[] = defaultData) {
    const seriesData = data.sort( (a, b)  => a.value - b.value)
    const legendData = data.map( item  => item.name )
    const colors = [
            'rgba(255, 88, 111, 1)',
            'rgba(41,209,254,1)',
            'rgba(239, 230, 91, 1)',
            'rgba(252, 189, 0, 1)',
            'rgba(134, 72, 0, 1)'
        ]
    const options = {
        backgroundColor: '#fff',
        color: colors,
        title: {
            text: 'normal Pie',
            left: 'center',
            top: 20,
            textStyle: {
                color: '#ccc'
            }
        },
        legend: {
            type: 'scroll',
            orient: 'vertical',
            right: 10,
            top: '30%',
            bottom: 20,
            data: legendData,
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
    
        visualMap: {
            show: false,
            min: 80,
            max: 600,
            inRange: {
                colorLightness: [0, 1]
            }
        },
        series : [
            {
                name:'访问来源',
                type:'pie',
                radius : '55%',
                center: ['50%', '50%'],
                data: seriesData,
                roseType: 'radius',
                label: {
                    show: false,
                    // normal: {
                    //     textStyle: {
                    //         color: '#333'
                    //     }
                    // }
                },
                labelLine: {
                    show: false,
                    // normal: {
                    //     lineStyle: {
                    //         color: '#333'
                    //     },
                    //     smooth: 0.2,
                    //     length: 10,
                    //     length2: 20
                    // }
                },
                itemStyle: {
                    normal: {
                        shadowBlur: 200,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                },
                animationType: 'scale',
                animationEasing: 'elasticOut',
                animationDelay: (idx:number) => {
                    return Math.random() * 200;
                }
            }
        ]
    }
    return options
}

export default createOptions