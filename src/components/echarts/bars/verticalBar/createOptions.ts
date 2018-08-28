import * as echarts  from 'echarts/lib/echarts';
// import echartsLinear from 'echarts/lib/util/graphic'
const testData = [
    {value: 123, name: '拱墅区分局'},
    {value: 23, name: '西湖区分局'},
    {value: 103, name: '滨江区分局'},
    {value: 133, name: '江干区分局'}
]
function createOption(data: any[] = testData) {
    const yAxisData:string[] = []
    const xAxisData:number[] = []
    data.forEach(item => {
        xAxisData.push(item.name)
        yAxisData.push(item.value)
    })
    const option = {
        title: {
            text: '',
            subtext: ''
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            textStyle:{
                color: '#fff'
            }
            // data: ['今日实时', '昨日']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: [0, 0.01],
            data: xAxisData,
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            },
            axisLabel: {
                color: '#fff',
            },
            splitArea: {
                show: true,
                areaStyle: {
                    color: ['rgba(250,250,250,0.0)', 'rgba(250,250,250,0.05)']
                }
            }
        },
        yAxis: {
            type: 'value',
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            },
            axisLabel: {
                color: '#fff',
            },
            splitLine: {
                show: false
            }
        },
        series: [
            {
                name: '今日实时',
                type: 'bar',
                data: yAxisData,
                itemStyle: {
                    color: new echarts.graphic['LinearGradient']( // tslint:disable-line
                        0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(0, 103, 190, 1)'
                            },
                            {
                                offset: 0.8,
                                color: 'rgba(0, 103, 190,.8)'
                            },
                            {
                                offset: 1,
                                color: 'rgba(0, 103, 190,.6)'
                            }
                        ]
                    ),
                    // color: 'rgba(0, 103, 190, 1)'
                },
                label: {
                    normal: {
                        show: true,
                        position: "top",
                        textStyle: {
                            color: "#ffc72b",
                            fontSize: 20
                        }
                    }
                },
            }
         
        ]
    }
    return option    
}

export default createOption