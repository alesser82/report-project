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
                color: "#40B3A2",
                width: 9
            },
            to: {
                color: "#40B3A2",
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
                color: "#242582",
                width: 9
            },
            to: {
                color: "#242582",
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
                color: "#40B3A2",
                width: 9
            },
            to: {
                color: "#40B3A2",
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

        totalInvoiceMediumProgress.animate(1.85, {
            duration: 2000
        });
    }

    // END INVOICE

})