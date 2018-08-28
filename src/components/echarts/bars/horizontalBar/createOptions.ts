import * as echarts  from 'echarts/lib/echarts';
// import echartsLinear from 'echarts/lib/util/graphic'
const testData = [
    {value: 123, name: '拱墅区分局'},
    {value: 23, name: '西湖区分局'},
    {value: 103, name: '滨江区分局'},
    {value: 133, name: '江干区分局'},
    {value: 23, name: '上城区分局'},
    {value: 43, name: '下城区分局'},
    {value: 63, name: '富阳区分局'},
]
function createOption(data: any[] = testData) {
    const yAxisData:string[] = []
    const xAxisData:number[] = []
    data.forEach(item => {
        yAxisData.push(item.name)
        xAxisData.push(item.value)
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
            type: 'value',
            boundaryGap: [0, 0.01],
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
        },
        yAxis: {
            type: 'category',
            data: yAxisData,
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
            },
            splitArea: {
                show: true,
                areaStyle: {
                    color: ['rgba(250,250,250,0.0)', 'rgba(250,250,250,0.05)']
                }
            }
        },
        series: [
            {
                name: '今日实时',
                type: 'bar',
                data: xAxisData,
                itemStyle: {
                    // new echarts.graphic.LinearGradient Property 'LinearGradient' does not exist on type 'Graphic'.
                    color: new echarts.graphic['LinearGradient']( // tslint:disable-line
                        1, 0, 0, 0, [{
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
                        position: "right",
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