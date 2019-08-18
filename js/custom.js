$(window).ready(function () {

    // ALL TASK BY STATUS

    inProgressBar();

    function inProgressBar() {
        var inProgressBar = new ProgressBar.Circle(".progress-content", {
            color: "violet",
            strokeWidth: 9,
            trailWidth: 9,
            trailColor: "transparant",
            easing: "easeInOut",
            from: {
                color: "#31668E",
                width: 9
            },
            to: {
                color: "#31668E",
                width: 9
            },
            text: {
                value: '0',
                className: 'progress-task',
                style: {
                    color: 'black',
                    position: 'absolute',
                    padding: 0,
                    margin: 0,
                    transform: null,
                    textAlign: 'center',
                    fontWeight: '600'
                }
            },

            svgStyle: {
                position: 'absolute',
                display: 'block',
                width: '50%',
                zIndex: '1'
            },

            step: (state, shape) => {
                shape.path.setAttribute("stroke", state.color);
                shape.path.setAttribute("stroke-width", state.width);
                // shape.setText(Math.round(shape.value() * 100) + ' %');
                shape.setText('12 of 24 tasks <br> inProgress');
            }
        });

        inProgressBar.animate(1, {
            duration: 2000
        }, inCompletedBar());
    }

    function inCompletedBar() {
        var inCompletedBar = new ProgressBar.Circle(".progress-content", {
            color: "violet",
            strokeWidth: 9,
            trailWidth: 9,
            trailColor: "transparant",
            easing: "easeInOut",
            from: {
                color: "#b7c9a1",
                width: 9
            },
            to: {
                color: "#b7c9a1",
                width: 9
            },
            text: {
                value: '0',
                className: 'progress-task',
                style: {
                    color: 'black',
                    position: 'absolute',
                    top: '45%',
                    left: '50%',
                    padding: 0,
                    margin: 0,
                    transform: null
                }
            },

            svgStyle: {
                position: 'absolute',
                display: 'block',
                width: '50%',
                zIndex: '2'
            },

            step: (state, shape) => {
                shape.path.setAttribute("stroke", state.color);
                shape.path.setAttribute("stroke-width", state.width);
                // shape.setText(Math.round(shape.value() * 100) + ' %');
                shape.setText('');
            }
        });

        inCompletedBar.animate(1.5, {
            duration: 2000
        }, onHoldBar());
    }

    function onHoldBar() {
        var inOnholdBar = new ProgressBar.Circle(".progress-content", {
            color: "violet",
            strokeWidth: 9,
            trailWidth: 9,
            trailColor: "transparant",
            easing: "easeInOut",
            from: {
                color: "#D79922",
                width: 9
            },
            to: {
                color: "#D79922",
                width: 9
            },
            text: {
                value: '0',
                className: 'progress-task',
                style: {
                    color: 'black',
                    position: 'absolute',
                    top: '45%',
                    left: '50%',
                    padding: 0,
                    margin: 0,
                    transform: null
                }
            },

            svgStyle: {
                position: 'absolute',
                display: 'block',
                width: '50%',
                zIndex: '3',
            },

            step: (state, shape) => {
                shape.path.setAttribute("stroke", state.color);
                shape.path.setAttribute("stroke-width", state.width);
                // shape.setText(Math.round(shape.value() * 100) + ' %');
                shape.setText('');
            }
        });

        inOnholdBar.animate(1.9, {
            duration: 2000
        }, inCancelledBar());
    }

    function inCancelledBar() {
        var inCancelledBar = new ProgressBar.Circle(".progress-content", {
            color: "violet",
            strokeWidth: 9,
            trailWidth: 9,
            trailColor: "transparant",
            easing: "easeInOut",
            from: {
                color: "#5C2018",
                width: 9
            },
            to: {
                color: "#5C2018",
                width: 9
            },
            text: {
                value: '0',
                className: 'progress-task',
                style: {
                    color: 'black',
                    position: 'absolute',
                    top: '45%',
                    left: '50%',
                    padding: 0,
                    margin: 0,
                    transform: null
                }
            },

            svgStyle: {
                position: 'absolute',
                display: 'block',
                width: '50%',
                zIndex: '4'
            },

            step: (state, shape) => {
                shape.path.setAttribute("stroke", state.color);
                shape.path.setAttribute("stroke-width", state.width);
                // shape.setText(Math.round(shape.value() * 100) + ' %');
                shape.setText('');
            }
        });

        inCancelledBar.animate(1.95, {
            duration: 2000
        }, otherProgressBar());
    }

    function otherProgressBar() {
        var otherProgressBar = new ProgressBar.Circle(".progress-content", {
            color: "violet",
            strokeWidth: 9,
            trailWidth: 9,
            trailColor: "transparant",
            easing: "easeInOut",
            from: {
                color: "#9db1cc",
                width: 9
            },
            to: {
                color: "#9db1cc",
                width: 9
            },
            text: {
                value: '0',
                className: 'progress-task',
                style: {
                    color: 'black',
                    position: 'absolute',
                    top: '45%',
                    left: '50%',
                    padding: 0,
                    margin: 0,
                    transform: null
                }
            },

            svgStyle: {
                position: 'absolute',
                display: 'block',
                width: '70%',
                zIndex: '4',
            },

            step: (state, shape) => {
                shape.path.setAttribute("stroke", state.color);
                shape.path.setAttribute("stroke-width", state.width);
                // shape.setText(Math.round(shape.value() * 100) + ' %');
                shape.setText('');
            }
        });

        otherProgressBar.animate(0.1, {
            duration: 2000
        }, overdueProgressBar());
    }

    function overdueProgressBar() {
        var overdueProgressBar = new ProgressBar.Circle(".progress-content", {
            color: "violet",
            strokeWidth: 9,
            trailWidth: 9,
            trailColor: "transparant",
            easing: "easeInOut",
            from: {
                color: "#C2C9CF",
                width: 9
            },
            to: {
                color: "#C2C9CF",
                width: 9
            },
            text: {
                value: '0',
                className: 'progress-task',
                style: {
                    color: 'black',
                    position: 'absolute',
                    top: '45%',
                    left: '50%',
                    padding: 0,
                    margin: 0,
                    transform: null
                }
            },

            svgStyle: {
                position: 'absolute',
                display: 'block',
                width: '70%',
                zIndex: '3',
            },

            step: (state, shape) => {
                shape.path.setAttribute("stroke", state.color);
                shape.path.setAttribute("stroke-width", state.width);
                // shape.setText(Math.round(shape.value() * 100) + ' %');
                shape.setText('');
            }
        });

        overdueProgressBar.animate(2.3, {
            duration: 2000
        });
    }

    // END ALL TASK BY STATUS

    // INVOICE

    totalInvoiceLowProgress()

    function totalInvoiceLowProgress() {
        var totalInvoiceLowProgress = new ProgressBar.Circle(".invoice-progress", {
            color: "violet",
            strokeWidth: 9,
            trailWidth: 9,
            trailColor: "transparant",
            easing: "easeInOut",
            from: {
                color: "#b7c9a1",
                width: 9
            },
            to: {
                color: "#b7c9a1",
                width: 9
            },
            text: {
                value: '0',
                className: 'progress-task',
                style: {
                    color: 'black',
                    position: 'absolute',
                    top: '45%',
                    left: '50%',
                    padding: 0,
                    margin: 0,
                    transform: null
                }
            },

            svgStyle: {
                position: 'absolute',
                display: 'block',
                width: '70%',
                zIndex: '1',
            },

            step: (state, shape) => {
                shape.path.setAttribute("stroke", state.color);
                shape.path.setAttribute("stroke-width", state.width);
                // shape.setText(Math.round(shape.value() * 100) + ' %');
                shape.setText('');
            }
        });

        totalInvoiceLowProgress.animate(0.6, {
            duration: 2000
        }, totalInvoiceMediumProgress());
    }

    function totalInvoiceMediumProgress() {
        var totalInvoiceMediumProgress = new ProgressBar.Circle(".invoice-progress", {
            color: "violet",
            strokeWidth: 9,
            trailWidth: 9,
            trailColor: "transparant",
            easing: "easeInOut",
            from: {
                color: "#30aac2",
                width: 9
            },
            to: {
                color: "#30aac2",
                width: 9
            },
            text: {
                value: '0',
                className: 'progress-task',
                style: {
                    color: 'black',
                    position: 'absolute',
                    top: '45%',
                    left: '50%',
                    padding: 0,
                    margin: 0,
                    transform: null
                }
            },

            svgStyle: {
                position: 'absolute',
                display: 'block',
                width: '70%',
                zIndex: '2',
            },

            step: (state, shape) => {
                shape.path.setAttribute("stroke", state.color);
                shape.path.setAttribute("stroke-width", state.width);
                // shape.setText(Math.round(shape.value() * 100) + ' %');
                shape.setText('');
            }
        });

        totalInvoiceMediumProgress.animate(1.6, {
            duration: 2000
        }, totalInvoiceHighProgress());
    }

    function totalInvoiceHighProgress() {
        var totalInvoiceHighProgress = new ProgressBar.Circle(".invoice-progress", {
            color: "violet",
            strokeWidth: 9,
            trailWidth: 9,
            trailColor: "transparant",
            easing: "easeInOut",
            from: {
                color: "#3585b8",
                width: 9
            },
            to: {
                color: "#3585b8",
                width: 9
            },
            text: {
                value: '0',
                className: 'progress-task',
                style: {
                    color: 'black',
                    position: 'absolute',
                    top: '45%',
                    left: '50%',
                    padding: 0,
                    margin: 0,
                    transform: null
                }
            },

            svgStyle: {
                position: 'absolute',
                display: 'block',
                width: '70%',
                zIndex: '3',
            },

            step: (state, shape) => {
                shape.path.setAttribute("stroke", state.color);
                shape.path.setAttribute("stroke-width", state.width);
                // shape.setText(Math.round(shape.value() * 100) + ' %');
                shape.setText('');
            }
        });

        totalInvoiceHighProgress.animate(1.8, {
            duration: 2000
        }, invoiceHighProgress());
    }

    function invoiceHighProgress() {
        var invoiceHighProgress = new ProgressBar.Circle(".invoice-progress", {
            color: "violet",
            strokeWidth: 9,
            trailWidth: 9,
            trailColor: "transparant",
            easing: "easeInOut",
            from: {
                color: "#3585b8",
                width: 9
            },
            to: {
                color: "#3585b8",
                width: 9
            },
            text: {
                value: '0',
                className: 'progress-task',
                style: {
                    display: 'block',
                    color: 'black',
                    position: 'absolute',
                    padding: 0,
                    margin: 0,
                    transform: null,
                    fontWeight: 500,
                    marginTop: '10%',
                    marginLeft: '-8%',
                    zIndex: '3',
                    // background: '#fff'
                }
            },

            svgStyle: {
                position: 'absolute',
                display: 'block',
                width: '50%',
                zIndex: '1',
                marginTop: '10%'
            },

            step: (state, shape) => {
                shape.path.setAttribute("stroke", state.color);
                shape.path.setAttribute("stroke-width", state.width);
                // shape.setText(Math.round(shape.value() * 100) + ' %');
                shape.setText('10 Invoice');
            }
        });

        invoiceHighProgress.animate(0.45, {
            duration: 2000
        }, invoiceMediumProgress());
    }

    function invoiceMediumProgress() {
        var invoiceMediumProgress = new ProgressBar.Circle(".invoice-progress", {
            color: "violet",
            strokeWidth: 10,
            trailWidth: 10,
            trailColor: "transparant",
            easing: "easeInOut",
            from: {
                color: "#30aac2",
                width: 10
            },
            to: {
                color: "#30aac2",
                width: 10
            },
            text: {
                value: '0',
                className: 'progress-task',
                style: {
                    display: 'block',
                    color: 'black',
                    position: 'absolute',
                    padding: 0,
                    margin: 0,
                    transform: null,
                    fontWeight: 500,
                    marginTop: '14%',
                    marginLeft: '-8%',
                    zIndex: '2',
                    // background: '#fff'
                }
            },

            svgStyle: {
                position: 'absolute',
                display: 'block',
                width: '40%',
                zIndex: '1',
                marginTop: '15%'
            },

            step: (state, shape) => {
                shape.path.setAttribute("stroke", state.color);
                shape.path.setAttribute("stroke-width", state.width);
                // shape.setText(Math.round(shape.value() * 100) + ' %');
                shape.setText('20 Invoice');
            }
        });

        invoiceMediumProgress.animate(0.6, {
            duration: 2000
        }, invoiceLowProgress());
    }

    function invoiceLowProgress() {
        var invoiceLowProgress = new ProgressBar.Circle(".invoice-progress", {
            color: "violet",
            strokeWidth: 10,
            trailWidth: 10,
            trailColor: "transparant",
            easing: "easeInOut",
            from: {
                color: "#b7c9a1",
                width: 10
            },
            to: {
                color: "#b7c9a1",
                width: 10
            },
            text: {
                value: '0',
                className: 'progress-task',
                style: {
                    display: 'block',
                    color: 'black',
                    position: 'absolute',
                    padding: 0,
                    margin: 0,
                    transform: null,
                    fontWeight: 500,
                    marginTop: '18%',
                    marginLeft: '-9%',
                    zIndex: '2',
                    // background: '#fff'
                }
            },

            svgStyle: {
                position: 'absolute',
                display: 'block',
                width: '30%',
                zIndex: '1',
                marginTop: '20%'
            },

            step: (state, shape) => {
                shape.path.setAttribute("stroke", state.color);
                shape.path.setAttribute("stroke-width", state.width);
                // shape.setText(Math.round(shape.value() * 100) + ' %');
                shape.setText('222 Invoice');
            }
        });

        invoiceLowProgress.animate(0.55, {
            duration: 2000
        });
    }

    // END INVOICE

    // TASK COMPLETED

    taskCompletedProgress()

    function taskCompletedProgress() {
        var taskCompletedProgress = new ProgressBar.Circle(".task-completed-progress", {
            color: "violet",
            strokeWidth: 5,
            trailWidth: 5,
            trailColor: "#C2C9CF",
            easing: "easeInOut",
            from: {
                color: "#b7c9a1",
                width: 5
            },
            to: {
                color: "#b7c9a1",
                width: 5
            },
            text: {
                value: '0',
                className: 'text-light text-center',
                style: {
                    position: 'absolute',
                    padding: 0,
                    margin: 0,
                    transform: null,
                    fontWeight: 600,
                    zIndex: '2',
                    fontSize: '24px'
                }
            },

            svgStyle: {
                position: 'absolute',
                display: 'block',
                width: '60%',
                zIndex: '1',
                background: '#000',
                borderRadius: '100%'
            },

            step: (state, shape) => {
                shape.path.setAttribute("stroke", state.color);
                shape.path.setAttribute("stroke-width", state.width);
                // shape.setText(Math.round(shape.value() * 100) + ' %');
                shape.setText('76% <br> <span>overall progress</span>');
            }
        });

        taskCompletedProgress.animate(0.4, {
            duration: 2000
        });
    }

    // END TASK COMPLETED

    // WEEK PROGRESS

    weekTaskProgress()

    function weekTaskProgress() {
        var weekTaskProgress = []
        var margin = []
        var widthMargin = []
        var weekStartEnd = 3
        var sumWeekEnd = 3
        var weekEndStart = 7
        var sumWeekStart = 7
        var weekNumber = []
        var weekWords = []
        for (let index = 0; index <= 10; index++) {
            weekTaskProgress.push(index)
            margin.push(index)
            widthMargin.push(index)
            weekNumber.push(index)
            weekWords.push(index)
            widthMargin[index] = index * 10
            margin[index] = widthMargin[index]
            if (index < sumWeekEnd) {
                weekNumber[index] = weekStartEnd - index
            } else if (index > sumWeekEnd) {
                weekNumber[index] = index - sumWeekEnd
            } else {
                weekNumber[index] = null
            }

            weekWords[index] = weekNumber[index] == null ?
                `<small class="this-week">
                    This Week
                </small>` :
                `<small>
                    WK-` + weekNumber[index] + ` 
                </small>`

            weekTaskProgress[index] = new ProgressBar.Line(".week-progress-content", {
                color: "violet",
                strokeWidth: 5,
                trailWidth: 5,
                trailColor: "white",
                easing: "easeInOut",
                from: {
                    color: "#b7c9a1",
                    width: 5
                },
                to: {
                    color: "#b7c9a1",
                    width: 5
                },
                text: {
                    value: '0',
                    className: 'text-light text-center',
                    style: {
                        position: 'absolute',
                        display: 'flex',
                        justifyContent: 'center',
                        transform: null,
                        fontWeight: 600,
                        width: '10%',
                        zIndex: '3',
                        fontSize: '24px',
                        marginLeft: margin[index] + '%',
                        marginTop: '-50px'
                    }
                },

                svgStyle: {
                    position: 'absolute',
                    display: 'block',
                    width: '10%',
                    height: '5px',
                    zIndex: '1',
                    background: '#000',
                    marginLeft: margin[index] + '%',
                    marginTop: '-50px'
                },

                step: (state, shape) => {
                    shape.path.setAttribute("stroke", state.color);
                    shape.path.setAttribute("stroke-width", state.width);
                    // shape.setText(Math.round(shape.value() * 100) + ' %');
                    shape.setText('<div class="week-point week-point-progress mb-n2"></div>' + weekWords[index] + '');
                    // shape.setText('');
                }
            });

            weekTaskProgress[index].animate(1, {
                duration: 2000
            }, weekDueProgress());
        }
    }

    function weekDueProgress() {
        var weekTaskProgress = []
        var margin = []
        var widthMargin = []
        var weekStartEnd = 3
        var sumWeekEnd = 3
        var weekEndStart = 7
        var sumWeekStart = 7
        var weekNumber = []
        var weekWords = []
        for (let index = 0; index <= 1; index++) {
            weekTaskProgress.push(index)
            margin.push(index)
            widthMargin.push(index)
            weekNumber.push(index)
            weekWords.push(index)
            widthMargin[index] = index * 10
            margin[index] = widthMargin[index]
            if (index < sumWeekEnd) {
                weekNumber[index] = weekStartEnd - index
            } else if (index > sumWeekEnd) {
                weekNumber[index] = index - sumWeekEnd
            } else {
                weekNumber[index] = null
            }

            weekWords[index] = weekNumber[index] == null ?
                `<small class="this-week">
                    This Week
                </small>` :
                `<small>
                    WK-` + weekNumber[index] + ` 
                </small>`

            weekTaskProgress[index] = new ProgressBar.Line(".week-progress-content", {
                color: "violet",
                strokeWidth: 5,
                trailWidth: 5,
                trailColor: "white",
                easing: "easeInOut",
                from: {
                    color: "#242582",
                    width: 5
                },
                to: {
                    color: "#242582",
                    width: 5
                },
                text: {
                    value: '0',
                    className: 'text-light text-center',
                    style: {
                        position: 'absolute',
                        display: 'flex',
                        justifyContent: 'center',
                        transform: null,
                        fontWeight: 600,
                        width: '10%',
                        zIndex: '3',
                        fontSize: '24px',
                        marginLeft: margin[index] + '%',
                        marginTop: '-50px'
                    }
                },

                svgStyle: {
                    position: 'absolute',
                    display: 'block',
                    width: '10%',
                    height: '5px',
                    zIndex: '1',
                    background: '#000',
                    marginLeft: margin[index] + '%',
                    marginTop: '-50px'
                },

                step: (state, shape) => {
                    shape.path.setAttribute("stroke", state.color);
                    shape.path.setAttribute("stroke-width", state.width);
                    // shape.setText(Math.round(shape.value() * 100) + ' %');
                    shape.setText('<div class="week-point week-point-due mb-n2"></div>');
                    // shape.setText('');
                }
            });

            weekTaskProgress[index].animate(1, {
                duration: 2000
            }, weekCompletedProgress());
        }
    }

    function weekCompletedProgress() {
        var weekTaskProgress = []
        var margin = []
        var widthMargin = []
        var weekStartEnd = 3
        var sumWeekEnd = 3
        var weekEndStart = 7
        var sumWeekStart = 7
        var weekNumber = []
        var weekWords = []
        for (let index = 2; index <= 2; index++) {
            weekTaskProgress.push(index)
            margin.push(index)
            widthMargin.push(index)
            weekNumber.push(index)
            weekWords.push(index)
            widthMargin[index] = index * 10
            margin[index] = widthMargin[index]
            if (index < sumWeekEnd) {
                weekNumber[index] = weekStartEnd - index
            } else if (index > sumWeekEnd) {
                weekNumber[index] = index - sumWeekEnd
            } else {
                weekNumber[index] = null
            }

            weekWords[index] = weekNumber[index] == null ?
                `<small class="this-week">
                    This Week
                </small>` :
                `<small>
                    WK-` + weekNumber[index] + ` 
                </small>`

            weekTaskProgress[index] = new ProgressBar.Line(".week-progress-content", {
                color: "violet",
                strokeWidth: 5,
                trailWidth: 5,
                trailColor: "white",
                easing: "easeInOut",
                from: {
                    color: "#31668E",
                    width: 5
                },
                to: {
                    color: "#31668E",
                    width: 5
                },
                text: {
                    value: '0',
                    className: 'text-light text-center',
                    style: {
                        position: 'absolute',
                        display: 'flex',
                        justifyContent: 'center',
                        transform: null,
                        fontWeight: 600,
                        width: '10%',
                        zIndex: '3',
                        fontSize: '24px',
                        marginLeft: margin[index] + '%',
                        marginTop: '-50px'
                    }
                },

                svgStyle: {
                    position: 'absolute',
                    display: 'block',
                    width: '10%',
                    height: '5px',
                    zIndex: '1',
                    background: '#000',
                    marginLeft: margin[index] + '%',
                    marginTop: '-50px'
                },

                step: (state, shape) => {
                    shape.path.setAttribute("stroke", state.color);
                    shape.path.setAttribute("stroke-width", state.width);
                    // shape.setText(Math.round(shape.value() * 100) + ' %');
                    shape.setText('<div class="week-point week-point-completed mb-n2"></div>');
                    // shape.setText('');
                }
            });

            weekTaskProgress[index].animate(1, {
                duration: 2000
            });
        }
    }

    // END WEEK PROGRESS

    // PROJECT TIMELINES

    var widthProgressTimelines = []
    var marginProgressTimelines = []

    for (let index = 0; index < 12; index++) {
        widthProgressTimelines.push(index)
        marginProgressTimelines.push(index)
        switch (index) {
            case 0:
                widthProgressTimelines[index] = '30%'
                marginProgressTimelines[index] = '35%'
                break;
            case 1:
                widthProgressTimelines[index] = '40%'
                marginProgressTimelines[index] = '33%'
                break;
            case 2:
                widthProgressTimelines[index] = '45%'
                marginProgressTimelines[index] = '37%'
                break;
            case 3:
                widthProgressTimelines[index] = '15%'
                marginProgressTimelines[index] = '43%'
                break;
            case 4:
                widthProgressTimelines[index] = '20%'
                marginProgressTimelines[index] = '43%'
                break;
            case 5:
                widthProgressTimelines[index] = '25%'
                marginProgressTimelines[index] = '42%'
                break;
            case 6:
                widthProgressTimelines[index] = '45%'
                marginProgressTimelines[index] = '53%'
                break;
            case 7:
                widthProgressTimelines[index] = '40%'
                marginProgressTimelines[index] = '54%'
                break;
            case 8:
                widthProgressTimelines[index] = '35%'
                marginProgressTimelines[index] = '55%'
                break;
            case 9:
                widthProgressTimelines[index] = '35%'
                marginProgressTimelines[index] = '56%'
                break;
            case 10:
                widthProgressTimelines[index] = '65%'
                marginProgressTimelines[index] = '57%'
                break;
            case 11:
                widthProgressTimelines[index] = '35%'
                marginProgressTimelines[index] = '58%'
                break;

            default:
                widthProgressTimelines[index] = '100%'
                marginProgressTimelines[index] = '0%'
                break;
        }
    }

    $('.timelines-progress .progress-bar').each(function (i) {
        // $('.timelines-progress .progress-bar').eq(i).parents('.progress-place').css('margin-left', marginProgressTimelines[i])
        $('.timelines-progress .progress-bar').eq(i).parents('.progress-place').animate({
            marginLeft: marginProgressTimelines[i]
        }, 1000)
        // $('.timelines-progress .progress-bar').eq(i).css('min-width', '200px')
        $('.timelines-progress .progress-bar').eq(i).animate({
            width: widthProgressTimelines[i]
        }, 1000)
    })

    // END PROJECT TIMELINES

    // RESOURCE WORKLOAD

    var personName = []
    var widthProgressResource = []

    for (let index = 0; index < 15; index++) {
        personName.push(index)
        widthProgressResource.push(index)
        switch (index) {
            case 0:
                personName[index] = 1
                widthProgressResource[index] = 30
                break;
            case 1:
                personName[index] = 2
                widthProgressResource[index] = 0
                break;
            case 2:
                personName[index] = 3
                widthProgressResource[index] = 0
                break;
            case 3:
                personName[index] = 4
                widthProgressResource[index] = 0
                break;
            case 4:
                personName[index] = 5
                widthProgressResource[index] = 0
                break;
            case 5:
                personName[index] = 6
                widthProgressResource[index] = 0
                break;
            case 6:
                personName[index] = 7
                widthProgressResource[index] = 40
                break;
            case 7:
                personName[index] = 8
                widthProgressResource[index] = 60
                break;
            case 8:
                personName[index] = 9
                widthProgressResource[index] = 100
                break;
            case 9:
                personName[index] = 10
                widthProgressResource[index] = 70
                break;
            case 10:
                personName[index] = 11
                widthProgressResource[index] = 35
                break;
            case 11:
                personName[index] = 12
                widthProgressResource[index] = 50
                break;
            case 12:
                personName[index] = 13
                widthProgressResource[index] = 45
                break;
            case 13:
                personName[index] = 14
                widthProgressResource[index] = 47
                break;
            case 14:
                personName[index] = 15
                widthProgressResource[index] = 43
                break;
            case 15:
                personName[index] = 16
                widthProgressResource[index] = 43
                break;
            default:
                break;
        }

        $('.resource-workload').append(
            `
            <div class = "row">
                <div class = "col-3 d-flex justify-content-end align-items-center pr-0 shadow-none">
                    <span class = "text-capitalize text-secondary text-right" > Person Name ` + personName[index] + ` </span> 
                </div> 
                <div class = "col-1 border border-left-0 border-secondary p-0">
                </div> 
                <div class = "col-8 d-flex align-items-center pl-0">
                    <div class = "progress-resource"></div> 
                </div> 
            </div>
            `)
    }

    $('.progress-resource').each(function (i) {
        $('.progress-resource').eq(i).animate({
            width: widthProgressResource[i] + '%'
        }, 1000)

    })

    // END RESOURCE WORKLOAD

})