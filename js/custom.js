$(window).ready(function () {
    // MONITOR
    $('.project-monitor-img').each(function (i) {
        $('.project-monitor-img').eq(i).hover(function () {
            if ($(window).width() < 500) {
                textAppear(i)
            }
        }, function () {
            // $('.text-project').eq(i).css('opacity', '0')
            textDisappear()
        })
    })

    function textAppear(i) {
        $('.text-project').eq(i).css('opacity', '1')
    }

    function textDisappear() {
        $('.text-project').css('opacity', '0')
    }
    // END MONITOR

    // PROGRESS

    // TASK STATUS PROGRESS
    var circleBar = new ProgressBar.Circle(".circle-container-inprogress", {
        color: "white",
        strokeWidth: 2,
        trailWidth: 10,
        trailColor: "#cdd6c5",
        easing: "easeInOut",
        from: {
            color: "#2697b9",
            width: 10,
        },
        to: {
            color: "#2697b9",
            width: 10,
        },
        text: {
            value: '0',
            className: 'progress-text',
            style: {
                color: 'black',
                position: 'absolute',
                top: '35%',
                left: '20%',
                padding: 0,
                margin: 0,
                transform: null,
            }
        },
        svgStyle: {
            position: 'absolute',
            display: 'block',
            opacity: 1,
            zIndex: 7
        },
        step: (state, shape) => {
            shape.path.setAttribute("stroke", state.color);
            shape.path.setAttribute("stroke-width", state.width);
            shape.setText(Math.round(64 - shape.value() * 64) + ' of 64 task InProgress');
        }
    });

    circleBar.animate(0.796, {
        duration: 1500
    });


    var circleCancelledBar = new ProgressBar.Circle(".circle-container-cancelled", {
        color: "white",
        strokeWidth: 0,
        trailWidth: 10,
        trailColor: "#cdd6c5",
        easing: "easeInOut",
        from: {
            color: "#b35d71",
            width: 10,
            zIndex: 5
        },
        to: {
            color: "#b35d71",
            width: 10,
            zIndex: 5
        },
        text: {
            value: '0',
            className: 'progress-text',
            style: {
                color: 'black',
                position: 'absolute',
                top: '30%',
                left: '20%',
                padding: 0,
                margin: 0,
                transform: null,
            }
        },
        svgStyle: {
            position: 'absolute',
            display: 'block',
            opacity: 0.4
        },
        step: (state, shape) => {
            shape.path.setAttribute("stroke", state.color);
            shape.path.setAttribute("stroke-width", state.width);
            shape.setText('');
        }
    });

    circleCancelledBar.animate(-0.15, {
        duration: 1500,
    });

    var circleHoldBar = new ProgressBar.Circle(".circle-container-hold", {
        color: "white",
        strokeWidth: 1,
        trailWidth: 10,
        trailColor: "#cdd6c5",
        easing: "easeInOut",
        from: {
            color: "#dbb198",
            width: 10,
            zIndex: 5
        },
        to: {
            color: "#dbb198",
            width: 10,
            zIndex: 5
        },
        text: {
            value: '0',
            className: 'progress-text',
            style: {
                color: 'black',
                position: 'absolute',
                top: '30%',
                left: '20%',
                padding: 0,
                margin: 0,
                transform: null,
            }
        },
        svgStyle: {
            position: 'absolute',
            display: 'block',
            opacity: 0.4
        },
        step: (state, shape) => {
            shape.path.setAttribute("stroke", state.color);
            shape.path.setAttribute("stroke-width", state.width);
            shape.setText('');
        }
    });

    circleHoldBar.animate(-0.1, {
        duration: 1500,
    });

    var circleOtherBar = new ProgressBar.Circle(".circle-container-other", {
        color: "white",
        strokeWidth: 1,
        trailWidth: 10,
        trailColor: "#f8f9fa",
        easing: "easeInOut",
        from: {
            color: "#9fb3d4",
            width: 10,
            zIndex: 7
        },
        to: {
            color: "#9fb3d4",
            width: 10,
            zIndex: 7
        },
        text: {
            value: '0',
            className: 'progress-text',
            style: {
                color: 'black',
                position: 'absolute',
                top: '30%',
                left: '20%',
                padding: 0,
                margin: 0,
                transform: null,
            }
        },
        svgStyle: {
            position: 'absolute',
            display: 'block',
            opacity: 1
        },
        step: (state, shape) => {
            shape.path.setAttribute("stroke", state.color);
            shape.path.setAttribute("stroke-width", state.width);
            shape.setText('');
        }
    });

    circleOtherBar.animate(0.05, {
        duration: 1500,
    });

    var circleInvoiceLow = new ProgressBar.Circle(".circle-container-invoice-low", {
        color: "white",
        strokeWidth: 7,
        trailWidth: 7,
        trailColor: "#f8f9fa",
        easing: "easeInOut",
        from: {
            color: "#018473",
            width: 7,
            zIndex: 1
        },
        to: {
            color: "#018473",
            width: 7,
            zIndex: 1
        },
        text: {
            value: '0',
            className: 'progress-text',
            style: {
                color: 'black',
                position: 'absolute',
                top: '5%',
                left: '3%',
                padding: 0,
                margin: 0,
                transform: null,
                fontSize: '9px',
                textTransform: 'uppercase'
            }
        },
        svgStyle: {
            position: 'absolute',
            display: 'block',
            opacity: 0.5,
            marginTop: '9px'
        },
        step: (state, shape) => {
            shape.path.setAttribute("stroke", state.color);
            shape.path.setAttribute("stroke-width", state.width);
            shape.setText('22 invoice');
        }
    });

    circleInvoiceLow.animate(0.6, {
        duration: 1500,
    });

    var circleInvoiceMedium = new ProgressBar.Circle(".circle-container-invoice-medium", {
        color: "white",
        strokeWidth: 7,
        trailWidth: 7,
        trailColor: "#f8f9fa",
        easing: "easeInOut",
        from: {
            color: "#41a0b2",
            width: 6,
            zIndex: 1
        },
        to: {
            color: "#41a0b2",
            width: 6,
            zIndex: 1
        },
        text: {
            value: '0',
            className: 'progress-text',
            style: {
                color: 'black',
                position: 'absolute',
                top: '4%',
                left: '12.5%',
                padding: 0,
                margin: 0,
                transform: null,
                fontSize: '9px',
                textTransform: 'uppercase'
            }
        },
        svgStyle: {
            position: 'absolute',
            display: 'block',
            opacity: 0.5,
            marginTop: '9px'
        },
        step: (state, shape) => {
            shape.path.setAttribute("stroke", state.color);
            shape.path.setAttribute("stroke-width", state.width);
            shape.setText('22 invoice');
        }
    });

    circleInvoiceMedium.animate(0.6, {
        duration: 1500,
    });

    var circleInvoiceHigh = new ProgressBar.Circle(".circle-container-invoice-high", {
        color: "white",
        strokeWidth: 7,
        trailWidth: 7,
        trailColor: "#f8f9fa",
        easing: "easeInOut",
        from: {
            color: "#3a82aa",
            width: 5,
            zIndex: 1
        },
        to: {
            color: "#3a82aa",
            width: 5,
            zIndex: 1
        },
        text: {
            value: '0',
            className: 'progress-text',
            style: {
                color: 'black',
                position: 'absolute',
                top: '4%',
                left: '20%',
                padding: 0,
                margin: 0,
                transform: null,
                fontSize: '9px',
                textTransform: 'uppercase'
            }
        },
        svgStyle: {
            position: 'absolute',
            display: 'block',
            opacity: 0.5,
            marginTop: '9px'
        },
        step: (state, shape) => {
            shape.path.setAttribute("stroke", state.color);
            shape.path.setAttribute("stroke-width", state.width);
            shape.setText('22 invoice');
        }
    });

    circleInvoiceHigh.animate(0.6, {
        duration: 1500,
    });

    var circleInvoiceAll = new ProgressBar.Circle(".circle-container-invoice-all", {
        color: "white",
        strokeWidth: 7,
        trailWidth: 7,
        trailColor: "",
        easing: "easeInOut",
        from: {
            color: "#b7ceb2",
            width: 7,
            zIndex: 1
        },
        to: {
            color: "#b7ceb2",
            width: 7,
            zIndex: 1
        },
        text: {
            value: '0',
            className: 'progress-text',
            style: {
                color: 'black',
                position: 'absolute',
                top: '-5%',
                left: '12%',
                padding: 0,
                margin: 0,
                transform: null,
                fontSize: '9px'
            }
        },
        svgStyle: {
            position: 'absolute',
            display: 'block',
            opacity: 1,
        },
        step: (state, shape) => {
            shape.path.setAttribute("stroke", state.color);
            shape.path.setAttribute("stroke-width", state.width);
            shape.setText('');
        }
    });

    circleInvoiceAll.animate(0.6, {
        duration: 1500,
    });

    var circleInvoiceAll2 = new ProgressBar.Circle(".circle-container-invoice-all-2", {
        color: "white",
        strokeWidth: 0,
        trailWidth: 7,
        trailColor: "#2da6bb",
        easing: "easeInOut",
        from: {
            color: "#2a82b4",
            width: 7,
            zIndex: 2
        },
        to: {
            color: "#2a82b4",
            width: 7,
            zIndex: 2
        },
        text: {
            value: '0',
            className: 'progress-text',
            style: {
                color: 'black',
                position: 'absolute',
                top: '-5%',
                left: '12%',
                padding: 0,
                margin: 0,
                transform: null,
                fontSize: '9px'
            }
        },
        svgStyle: {
            position: 'absolute',
            display: 'block',
            opacity: 0.6
        },
        step: (state, shape) => {
            shape.path.setAttribute("stroke", state.color);
            shape.path.setAttribute("stroke-width", state.width);
            shape.setText('');
        }
    });

    circleInvoiceAll2.animate(-0.1, {
        duration: 1500,
    });

    var overallProgressBar = new ProgressBar.Circle(".overall-progress-bar", {
        color: "white",
        strokeWidth: 7,
        trailWidth: 7,
        trailColor: "#d6dee9",
        easing: "easeInOut",
        from: {
            color: "#abbf9c",
            width: 7,
            zIndex: 2
        },
        to: {
            color: "#abbf9c",
            width: 7,
            zIndex: 2
        },
        text: {
            value: '0',
            className: 'progress-text',
            style: {
                color: '#f8f9fa',
                position: 'absolute',
                top: '40%',
                left: '0%',
                padding: 0,
                margin: 0,
                transform: null,
                fontSize: '20px',
                fontWeight: '700',
                textTransform: 'uppercase',
                display: 'block',
                width: '100%',
                textAlign: 'center'
            }
        },
        svgStyle: {
            position: 'absolute',
            display: 'block',
            opacity: 1,
            background: '#343a40',
            borderRadius: '100%',
            width: '90%'
        },
        step: (state, shape) => {
            shape.path.setAttribute("stroke", state.color);
            shape.path.setAttribute("stroke-width", state.width);
            shape.setText('72% <br> <p style="font-size:12px">overall progress</p>');
        }
    });

    overallProgressBar.animate(0.6, {
        duration: 1500,
    });

    var lineBarProgress = new ProgressBar.Line(".week-progress-line-progress", {
        strokeWidth: 0.8,
        trailWidth: 0,
        from: {
            color: "#c7d09b"
        },
        to: {
            color: "#c7d09b"
        },
        text: {
            value: '0',
            className: 'progress-text',
            style: {
                color: 'black',
                position: 'absolute',
                top: '-30px',
                padding: 0,
                margin: 0,
                transform: null
            }
        },

        svgStyle: {
            position: 'absolute',
            zIndex: '2'
        },
        step: (state, shape) => {
            shape.path.setAttribute("stroke", state.color);
            shape.setText('');
        }
    });

    lineBarProgress.animate(1, {
        duration: 4000
    });

    var lineBarDue = new ProgressBar.Line(".week-progress-line-due", {
        strokeWidth: 0.8,
        trailWidth: 0,
        from: {
            color: "#2697b9"
        },
        to: {
            color: "#2697b9"
        },
        text: {
            value: '0',
            className: 'progress-text',
            style: {
                color: 'black',
                position: 'absolute',
                top: '-30px',
                padding: 0,
                margin: 0,
                transform: null
            }
        },

        svgStyle: {
            position: 'absolute',
            zIndex: '4'
        },
        step: (state, shape) => {
            shape.path.setAttribute("stroke", state.color);
            shape.setText('');
        }
    });

    lineBarDue.animate(0.1, {
        duration: 4000
    });

    $('.week-progress-line-completed').css('z-index', '4')

    var lineBarCompleted = new ProgressBar.Line(".week-progress-line-completed", {
        strokeWidth: 0.8,
        trailWidth: 0,
        from: {
            color: "#018473"
        },
        to: {
            color: "#018473"
        },
        text: {
            value: '0',
            className: 'progress-text',
            style: {
                color: 'black',
                position: 'absolute',
                top: '-30px',
                padding: 0,
                margin: 0,
                transform: null
            }
        },

        svgStyle: {
            position: 'absolute',
            zIndex: '3'
        },
        step: (state, shape) => {
            shape.path.setAttribute("stroke", state.color);
            shape.setText('');
        }
    });

    lineBarCompleted.animate(0.2, {
        duration: 4000
    });

    if ($(window).width() < 768) {
        $('.progress-line-vertical').css('display', 'unset')
    }

    // PROJECT TIMELINES

    var lineBarTimelines = []
    var marginlines = []
    var lengthTime = [0.3, 0.1, 0.4, 0.9, 0.2, 0.1, 0.9, 0.1, 0.4, 0.3, 0.9, 0.2, 0.1]
    for (let index = 0; index < 12; index++) {
        marginlines.push(10 * index)
    }
    console.log(lengthTime)
    for (let timelines = 1; timelines < 12; timelines++) {
        lineBarTimelines.push(timelines)
        lineBarTimelines[timelines] = new ProgressBar.Line(".timelines-bar-1", {
            strokeWidth: 1,
            trailWidth: 0,
            from: {
                color: "#3a82aa"
            },
            to: {
                color: "#018473"
            },
            text: {
                value: '0',
                className: 'progress-text',
                style: {
                    color: 'black',
                    position: 'absolute',
                    display: 'block',
                    top: '-30px',
                    padding: 0,
                    transform: null,
                    width: '300px',
                    fontSize: '12px',
                    bottom: '0px',
                    marginTop: '10px',
                }
            },

            svgStyle: {
                position: 'absolute',
                zIndex: '1',
                bottom: marginlines[timelines - 1],
            },
            step: (state, shape) => {
                shape.path.setAttribute("stroke", state.color);
                shape.path.setAttribute("class", 'coba');
                shape.setText('');
            }
        });

        lineBarTimelines[timelines].animate(lengthTime[timelines - 1], {
            duration: 4000
        });
    }

    $('.project-timelines-date').hover(function () {
        $('.project-timelines-project-name').css('opacity', '1')
    })

    // var coba = []
    // for (let no = 1; no <= 3; no++) {
    // coba += no
    // coba[no] = 'tes'
    // coba.push(no)
    // alert(coba)

    // }
    // console.log(coba[2])
    // END PROJECT TIMELINES


    // END PROGRESS
})