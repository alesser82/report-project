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

        inProgressBar.animate(1.7, {
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
                color: "#ADADAD",
                width: 9
            },
            to: {
                color: "#ADADAD",
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
            },

            step: (state, shape) => {
                shape.path.setAttribute("stroke", state.color);
                shape.path.setAttribute("stroke-width", state.width);
                // shape.setText(Math.round(shape.value() * 100) + ' %');
                shape.setText('');
            }
        });

        inCompletedBar.animate(1, {
            duration: 2000
        });
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
        });
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
            },

            step: (state, shape) => {
                shape.path.setAttribute("stroke", state.color);
                shape.path.setAttribute("stroke-width", state.width);
                // shape.setText(Math.round(shape.value() * 100) + ' %');
                shape.setText('');
            }
        });

        inCancelledBar.animate(1.95, {
            duration: null
        });
    }

    // END ALL TASK BY STATUS

})