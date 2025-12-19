        function fun(item) {
            document.querySelector(`.equationbox`).value += item;
        }


        function call() {
            if (document.querySelector(`.equationbox`).value === ``) { return; }

            const ans = document.querySelector(`.equationbox`).value;


            try {
                document.querySelector(`.equationbox`).value = eval(ans);
            }
            catch (error) {
                document.querySelector(`.equationbox`).value = `Expression Error`;
            }
        }


        function delet() {
            document.querySelector(`.equationbox`).value = ``;
        }


        function onedelete() {
            let n = document.querySelector(`.equationbox`).value.slice(0, -1);
            document.querySelector(`.equationbox`).value = n;
        }


        function checkoperator(item) {
            let a = document.querySelector(`.equationbox`).value;
            let operators = `+-.%/*`;
            let b = a.slice(-1);

            if (a === `` && item === `-`) {
                fun(item);
                return;
            }

            if (a === ``) { return; }

            if (operators.includes(b)) { return; }
            fun(item);
        }

        function lock(event) {
            if (event.key === `Enter` || event.key === `=`) {
                call();
            }
        }

        function checkoperator2(item) {
            let a = document.querySelector(`.equationbox`).value;
            let operators = `+-.%/*`;
            let b = a.slice(-1);

            //first level 
            if (a === `` && item === `-`) {
                fun(item);
                return;
            }

            //second level
            if (a === ``) { return; }

            //third level
            if (operators.includes(b)) {
                return;
            }
            fun(item);
        }

    