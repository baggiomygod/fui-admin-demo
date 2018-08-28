/**
 * 创建geo2D地图
 */
const options = {
    title: { text: '' },
    tooltip: {
        show: true,
        textStyle: {
            color: '#fff'
        }
    },
    geo: {
        map: 'hangzhouMap',
        label:{
            emphasis: {
                show: false
            }
        },
        itemStyle: {
            normal: {
                areaColor: '#ffff33',
                borderColor: 'rgba(255,235,255,1)',
                borderWidth: 2
            },
            emphasis: {
                areaColor: 'transparent'
            }
        },
        series: [{
            coordinateSystem: 'geo',
            // zoom: 1.25,
            roam: false,
            selectedMode: 'single',
            data: [],
            symbolSize: 12,
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                emphasis: {
                    borderColor: '#fff',
                    borderWidth: 1
                }
            },
            shadowColor: 'rgba(255, 255, 255, 1)',
            shadowOffsetX: 200,
            shadowOffsetY: 200,
            shadowBlur: 10,
        }]
    }
}

export default options