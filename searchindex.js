Search.setIndex({"docnames": ["contents/events", "contents/events_astable", "contents/events_interrupts", "contents/events_monostable", "contents/exec_time", "contents/first_project", "contents/gen_debugging", "contents/gen_libs", "contents/gen_main_structure", "contents/gen_mbed_keil", "contents/gen_mbed_project", "contents/gen_nucleo", "contents/general", "contents/io", "contents/io_analog_in", "contents/io_analog_out", "contents/io_digital", "contents/io_pwm_out", "contents/leds", "contents/motors", "contents/nucleo", "contents/polling_interrupts_rtos", "index"], "filenames": ["contents/events.rst", "contents/events_astable.rst", "contents/events_interrupts.rst", "contents/events_monostable.rst", "contents/exec_time.rst", "contents/first_project.rst", "contents/gen_debugging.rst", "contents/gen_libs.rst", "contents/gen_main_structure.rst", "contents/gen_mbed_keil.rst", "contents/gen_mbed_project.rst", "contents/gen_nucleo.rst", "contents/general.rst", "contents/io.rst", "contents/io_analog_in.rst", "contents/io_analog_out.rst", "contents/io_digital.rst", "contents/io_pwm_out.rst", "contents/leds.rst", "contents/motors.rst", "contents/nucleo.rst", "contents/polling_interrupts_rtos.rst", "index.rst"], "titles": ["Events and Interrupts", "Periodic events (astable)", "External events (interrupts)", "Monostable events", "Execution time", "First project", "Debugging your code", "External ressources / libraries", "Main program structure", "MBED OS and Keil Studio IDE", "Creation of a MBED project", "Nucleo boards and STM32 MCU", "Embedded systems", "Inputs and Outputs", "Analog Inputs", "Analog Outputs", "Digital inputs and outputs", "Pulsed width modulated outputs (PWM)", "LEDs control", "Motors control", "Nucleo boards from STMicroelectronics", "Polling vs Interrupts vs real-time OS", "Python for Science / Basics"], "terms": {"period": [0, 21], "astabl": 0, "monost": 0, "extern": [0, 5, 9, 12, 21], "In": [4, 5, 10, 11, 12, 21], "thi": [4, 5, 7, 9, 10, 11, 12, 21, 22], "section": [4, 5, 10, 21], "we": [4, 5, 10], "assum": [4, 10], "variabl": [4, 21], "b": 4, "c": [4, 5, 10], "ar": [4, 7, 9, 10, 11, 12, 21, 22], "type": [4, 10, 12], "integ": [4, 12], "x": 4, "y": 4, "z": 4, "doubl": 4, "instruct": [4, 9, 10], "cpu": [4, 12, 21], "l476rg": [4, 10, 20], "g431kb": [4, 10, 20], "oper": [4, 10], "26": 4, "n": [4, 12], "out_pin": 4, "1": [4, 12], "22": 4, "50": 4, "pow": 4, "2": [4, 12], "6": [4, 7, 10], "5": 4, "u": 4, "you": [5, 7, 9, 10, 11, 12], "learn": [5, 11, 22], "how": 5, "creat": [5, 7, 9, 12], "new": [5, 10, 12], "mbed": [5, 7, 11, 12, 20], "o": [5, 7, 10, 12, 20], "base": [5, 7, 9, 11, 12, 21], "us": [5, 7, 9, 10, 11, 12, 21], "keil": [5, 7, 11, 20], "studio": [5, 7, 11, 12, 20], "cloud": [5, 7, 11, 20], "compil": [5, 7, 9, 12], "test": [5, 7, 8, 12, 22], "your": [5, 7, 9, 12], "program": [5, 11, 22], "nucleo": [5, 7, 10], "board": [5, 7, 10], "see": [5, 7, 10, 11], "creation": [5, 7], "discuss": 5, "also": [5, 9, 10, 12, 21], "main": 5, "structur": [5, 21], "an": [5, 7, 9, 10, 11, 21], "embed": [5, 9, 11], "written": [5, 9, 12], "includ": [5, 9, 12, 21], "interrupt": 5, "driven": [5, 21], "event": [5, 21], "debug": [5, 9, 10, 11, 12], "code": [5, 7, 9, 10, 12, 21], "add": [5, 10], "librari": [5, 9, 12], "The": [7, 9, 10, 11, 12, 21, 22], "commun": [7, 9, 11, 12, 21], "being": [7, 9, 10, 12, 21], "activ": [7, 10], "grow": 7, "larg": 7, "number": [7, 12], "develop": [7, 9, 10, 11, 12, 20], "made": [7, 21], "avail": [7, 9, 10, 11, 21], "creator": 7, "team": [7, 9], "exampl": [7, 9, 10, 11, 12, 21], "These": [7, 11, 12, 21], "access": [7, 9, 10, 11], "repositori": [7, 10, 22], "mbed6": [7, 9, 10], "snap": 7, "To": [7, 9, 10, 21], "have": [7, 9, 10, 11, 12], "follow": [7, 9, 10, 21], "step": [7, 9, 10], "download": [7, 9, 10, 11], "all": [7, 9, 12, 21], "h": 7, "cpp": [7, 10], "file": [7, 21], "from": [7, 9, 10, 12, 21], "github": [7, 22], "often": [7, 12, 21], "lib": 7, "directori": [7, 10], "project": [7, 9, 11, 12, 22], "version": [7, 9, 10, 12], "blinki": [7, 10], "baremet": 7, "copi": [7, 10], "contain": [7, 9, 10, 12, 21], "main_xxx": 7, "suitabl": [7, 9, 21], "must": [7, 9, 11, 21], "first": [7, 9], "connect": [7, 9, 10, 11], "compon": [7, 9, 11, 12, 21], "want": [7, 10, 12], "control": [7, 9, 10, 12], "input": [7, 11, 12, 21], "output": [7, 10, 11, 12, 21], "recommend": [7, 10], "uc": [9, 12], "typic": [9, 10, 11, 12, 21], "specif": [9, 10, 11, 12, 21], "constraint": [9, 12, 21], "architectur": [9, 12, 21], "consid": 9, "when": [9, 10, 21], "design": [9, 10, 11, 12, 21], "softwar": [9, 10, 12], "them": [9, 12, 21], "memori": [9, 10, 12], "size": [9, 11], "process": [9, 10, 12, 21], "power": [9, 11, 12, 21], "peripher": [9, 10, 11, 12, 21], "limit": [9, 11, 12], "high": [9, 12, 21], "level": [9, 12], "respons": [9, 12, 21], "demand": [9, 12], "understand": [9, 10], "address": [9, 10], "i": [9, 10, 11, 21, 22], "essenti": [9, 10, 12, 21], "robust": 9, "effici": [9, 21], "reliabl": [9, 12, 21], "It": [9, 10, 11, 12, 21], "requir": [9, 10, 12, 21], "care": 9, "consider": [9, 12], "hardwar": [9, 10, 11, 12, 21], "applic": [9, 10, 11, 21, 22], "principl": 9, "throughout": 9, "commonli": [9, 12], "due": [9, 11, 21], "its": [9, 10, 12, 21, 22], "low": [9, 12, 21], "natur": 9, "direct": [9, 10], "over": [9, 10], "resourc": [9, 10, 12, 21], "write": [9, 10, 12, 21], "directli": [9, 10, 11], "correspond": [9, 10, 11, 21], "machin": [9, 12], "execut": [9, 12, 21], "": [9, 10, 12], "processor": [9, 12], "can": [9, 10, 11, 12, 21], "benefici": 9, "precis": [9, 21], "time": [9, 10, 11, 12], "minim": [9, 10, 21], "usag": [9, 12], "interact": [9, 10, 12, 21], "featur": [9, 10, 11, 12, 21], "while": [9, 21], "provid": [9, 12, 21], "maximum": 9, "come": 9, "challeng": 9, "complex": [9, 21], "longer": 9, "reduc": [9, 21], "portabl": 9, "compar": [9, 12, 21], "higher": 9, "like": [9, 12, 21], "increasingli": 9, "especi": [9, 21], "more": [9, 10, 12, 21], "suffici": 9, "here": [9, 10, 12], "some": [9, 10, 11, 12], "kei": 9, "point": [9, 10, 12], "about": [9, 10, 21], "object": [9, 10], "orient": [9, 10], "oop": 9, "allow": [9, 10, 12, 21], "concept": 9, "class": 9, "inherit": 9, "encapsul": 9, "polymorph": 9, "lead": [9, 21], "modular": [9, 21], "maintain": [9, 12], "which": [9, 10, 11, 12, 21], "advantag": [9, 21], "larger": [9, 12], "standard": 9, "templat": 9, "stl": 9, "rich": 9, "vector": 9, "arrai": [9, 12, 21], "map": 9, "algorithm": [9, 21], "util": [9, 12, 21], "although": [9, 10], "mai": [9, 12, 21], "alwai": 9, "constrain": [9, 21], "part": [9, 10], "still": [9, 22], "depend": [9, 10, 12, 21], "capabl": [9, 21], "highli": 9, "across": [9, 12], "differ": [9, 10, 11, 12], "platform": [9, 10, 11], "doesn": 9, "t": [9, 10], "reli": [9, 12], "optim": [9, 12], "toolchain": 9, "support": [9, 11, 21], "mani": [9, 21], "modern": 9, "popular": [9, 11, 21], "famili": [9, 10, 11], "arm": [9, 10, 11, 21], "cortex": [9, 11], "m": [9, 11], "seri": [9, 11], "avr": 9, "pic": 9, "other": [9, 10, 11, 12, 21], "mind": 9, "characterist": 9, "target": [9, 12, 21], "understood": 9, "core": [9, 11, 21], "translat": [9, 10, 12], "nativ": [9, 10, 12], "semiconductor": 9, "compani": 9, "ecosystem": 9, "rapid": 9, "prototyp": 9, "deploy": [9, 12], "lightweight": 9, "abstract": 9, "awai": 9, "detail": 9, "consist": [9, 21], "api": [9, 10, 12], "comprehens": 9, "set": [9, 10, 21, 22], "tool": [9, 10, 12], "two": [9, 10], "integr": [9, 11, 12, 21], "environ": [9, 10, 11, 12, 21], "call": [9, 10, 12, 21], "com": [9, 10], "ha": [9, 12, 21], "vibrant": 9, "contributor": 9, "partner": 9, "who": 9, "contribut": 9, "make": [9, 10, 12, 21], "easier": [9, 21], "find": 9, "collabor": 9, "leverag": 9, "exist": [9, 10, 12], "lens": [9, 10, 12], "ressourc": 9, "At": [9, 10], "moment": [9, 10], "onli": [9, 10, 11, 21], "login": [9, 10], "http": [9, 10], "both": 9, "account": [9, 10], "divis": 9, "web": 9, "particularli": [9, 21], "stm32": [9, 10, 20], "onlin": 9, "variou": [9, 10, 11, 12, 21], "necessari": [9, 10, 12], "edit": 9, "manag": [9, 10, 12, 21], "within": [9, 12, 21], "browser": [9, 10], "interfac": [9, 10, 11, 12, 21], "link": [9, 10, 11], "www": [9, 10], "under": 9, "need": [9, 10, 12, 21], "websit": [9, 22], "click": [9, 10], "Then": [9, 10], "sign": 9, "up": [9, 10, 12, 21], "until": [9, 12], "valid": 9, "email": 9, "take": [9, 12, 21], "few": [9, 10], "minut": 9, "A": [9, 10, 11, 12, 20], "client": 9, "local": 9, "deploi": 9, "firmwar": [9, 10], "devic": [9, 10, 12, 21], "offer": [9, 11, 12, 21], "same": [9, 10], "except": [9, 21], "instal": [9, 10, 12], "comput": [9, 10], "last": [9, 10], "site": 9, "internet": [9, 11, 12], "But": [9, 10, 11, 12], "after": [9, 10, 21], "If": [10, 12], "page": 10, "log": 10, "person": [10, 12], "window": 10, "divid": 10, "classic": 10, "manner": [10, 21], "area": [10, 21], "left": [10, 11, 20], "side": 10, "text": [10, 12], "editor": 10, "top": 10, "right": [10, 11, 20], "bottom": 10, "dure": [10, 21], "appear": 10, "icon": 10, "surround": 10, "orang": 10, "border": 10, "list": [10, 21], "pink": 10, "red": 10, "previou": [10, 11], "figur": [10, 11, 21], "avoid": 10, "ani": [10, 12], "conflict": 10, "sure": [10, 12], "chang": [10, 12, 21], "name": [10, 11], "give": [10, 11], "content": [10, 12], "uncheck": 10, "initi": [10, 21], "git": [10, 12], "check": [10, 21], "tab": 10, "13": 10, "now": 10, "go": 10, "start": 10, "befor": 10, "specifi": [10, 12], "where": [10, 12, 21], "store": [10, 12, 21], "open": [10, 21], "locat": [10, 12], "share": 10, "instanc": 10, "On": 10, "labwork": 10, "primarili": 10, "languag": [10, 12, 21], "familiar": 10, "tutori": [10, 22], "basic": 10, "most": 10, "otherwis": 10, "note": 10, "01_first_project": 10, "displai": [10, 21], "ten": 10, "thei": [10, 11, 12, 21], "stage": 10, "realiz": 10, "function": [10, 12, 20, 21], "serv": [10, 11, 12], "entri": 10, "later": 10, "system": [10, 11], "wide": [10, 12], "rang": [10, 12], "microcontrol": [10, 11], "mainli": 10, "don": 10, "button": 10, "enabl": 10, "automat": 10, "No": 10, "blue": 10, "build": 10, "one": [10, 11, 12, 21], "hammer": 10, "choos": 10, "profil": 10, "mode": [10, 21], "inlin": 10, "took": 10, "space": [10, 21], "contrari": 10, "releas": 10, "error": [10, 21], "occur": [10, 21], "obtain": 10, "next": [10, 12], "end": 10, "success": 10, "binari": [10, 12], "gener": [10, 11, 12, 21], "sub": 10, "project_dir": 10, "nucleo_target": 10, "arm6": 10, "final": 10, "enjoi": 10, "plai": [10, 12], "stmicroelectron": [10, 11], "through": [10, 12], "facilit": 10, "upload": 10, "via": 10, "usb": [10, 21], "cabl": 10, "recogn": 10, "storag": 10, "previous": 10, "just": 10, "past": 10, "bin": 10, "extens": 10, "second": 10, "intern": 10, "onboard": 10, "transfer": [10, 12], "ld1": 10, "led": 10, "blink": 10, "green": 10, "stop": 10, "each": [10, 11, 21], "instead": 10, "entir": 10, "term": [10, 12], "renam": 10, "mbed_app": 10, "json": 10, "configur": [10, 12, 21], "paramet": 10, "aspect": 10, "refer": [10, 11], "without": [10, 12, 21], "regist": [10, 12], "bare": 10, "metal": 10, "target_overrid": 10, "printf_lib": 10, "printf": [10, 12], "float": [10, 12], "true": [10, 11], "stdio": 10, "baud": 10, "rate": 10, "115200": 10, "modul": [10, 11, 21], "virtual": 10, "serial": [10, 11, 21], "port": 10, "baudrat": 10, "transmiss": 10, "For": 10, "rto": 10, "fat_chan": 10, "components_add": 10, "tailor": 11, "easi": 11, "unit": [11, 12], "belong": 11, "varieti": 11, "multipl": [11, 12, 21], "gpio": [11, 21], "purpos": [11, 21, 22], "sensor": [11, 12, 21], "option": 11, "well": 11, "expans": 11, "header": 11, "addit": [11, 12], "There": [11, 12, 21], "format": 11, "small": 11, "e": 11, "middl": 11, "among": [11, 12, 21], "hobbyist": 11, "student": [11, 12], "profession": 11, "afford": 11, "versatil": 11, "eas": 11, "id": [11, 12, 20], "could": [11, 21], "stm32cubemx": 11, "stm32cubeid": 11, "\u00b5vision": 11, "conveni": 11, "experi": 11, "iot": [11, 12], "thing": [11, 12], "pa_7": 11, "given": 11, "digit": [11, 13, 21], "lot": 11, "analog": [11, 13, 21], "adc": [11, 21], "indic": 11, "analogin": 11, "tag": 11, "puls": [11, 21], "width": [11, 21], "pwm": [11, 13, 21], "anoth": [11, 12], "special": [11, 12], "mosi": 11, "spi": [11, 21], "case": [11, 21], "possibl": 11, "dac": 11, "analogout": 11, "uart": [11, 21], "usart": 11, "i2c": [11, 21], "gnd": 11, "ground": 11, "voltag": 11, "0v": 11, "regul": [11, 21], "suppli": [11, 21], "3": 11, "3v": 11, "5v": 11, "current": 11, "document": [11, 12, 21, 22], "vin": 11, "between": [11, 12, 21], "7": 11, "12": 11, "volt": 11, "pictur": 11, "OF": 11, "pinout": 11, "64_l476rg": 11, "combin": 12, "along": 12, "actuat": 12, "simplifi": 12, "better": 12, "reduct": 12, "consumpt": [12, 21], "preval": 12, "numer": 12, "industri": 12, "automot": 12, "engin": 12, "anti": 12, "lock": 12, "brake": 12, "ab": 12, "airbag": 12, "entertain": 12, "navig": 12, "consum": 12, "electron": 12, "smartphon": 12, "smart": 12, "tv": 12, "camera": 12, "home": 12, "applianc": 12, "microwav": 12, "wash": 12, "wearabl": 12, "fit": 12, "tracker": 12, "autom": 12, "programm": 12, "logic": 12, "plc": 12, "supervisori": 12, "acquisit": [12, 21], "scada": 12, "manufactur": 12, "robot": [12, 21], "assembli": 12, "line": 12, "factori": 12, "medic": 12, "found": 12, "imag": 12, "equip": 12, "mri": 12, "ct": 12, "scanner": 12, "patient": 12, "monitor": 12, "infus": 12, "pump": 12, "pacemak": 12, "aerospac": 12, "defens": 12, "avion": 12, "aircraft": 12, "missil": 12, "guidanc": 12, "unman": 12, "aerial": 12, "vehicl": 12, "uav": 12, "militari": 12, "heavili": 12, "thermostat": 12, "secur": 12, "environment": 12, "interconnect": 12, "highlight": 12, "divers": 12, "crucial": [12, 21], "role": 12, "holonom": 12, "common": [12, 21], "circuit": [12, 21], "singl": 12, "chip": 12, "cost": 12, "sensit": [12, 21], "similar": 12, "desktop": 12, "signal": 12, "dsp": 12, "real": 12, "audio": 12, "telecommun": 12, "field": 12, "gate": 12, "fpga": 12, "implement": [12, 21], "custom": 12, "perform": [12, 21], "flexibl": 12, "effort": 12, "off": 12, "shelf": 12, "choic": [12, 21], "factor": 12, "central": 12, "handl": [12, 21], "accord": 12, "block": [12, 21], "diagram": [12, 21], "arithmet": 12, "alu": 12, "server": 12, "million": 12, "tini": 12, "transistor": 12, "diod": 12, "work": [12, 22], "togeth": 12, "repres": [12, 21], "bit": [12, 21], "0": 12, "multimedia": 12, "manipul": [12, 21], "task": [12, 21], "flow": [12, 21], "calcul": [12, 21], "chunk": 12, "encod": 12, "valu": 12, "buse": [12, 21], "around": [12, 21], "proccess": 12, "amount": 12, "bunch": 12, "tell": 12, "do": 12, "three": 12, "kind": 12, "substract": 12, "fpu": 12, "jump": 12, "thank": 12, "counter": 12, "pc": 12, "thousand": 12, "compact": 12, "pre": 12, "sens": 12, "li": 12, "intend": 12, "ram": 12, "rom": 12, "flash": 12, "contrast": 12, "standalon": 12, "critic": [12, 21], "dedic": [12, 21], "simpler": 12, "involv": [12, 21], "sever": [12, 21], "ensur": [12, 21], "expect": 12, "setup": 12, "favorit": 12, "import": [12, 21], "modifi": 12, "desir": 12, "onto": 12, "appropri": 12, "cli": 12, "separ": 12, "observ": 12, "behavior": [12, 21], "verifi": 12, "correctli": [12, 21], "doe": 12, "techniqu": [12, 21], "identifi": 12, "fix": 12, "issu": 12, "breakpoint": 12, "iter": [12, 21], "refin": 12, "result": 12, "re": 12, "repeat": [12, 21], "mcu": 20, "pin": [20, 21], "user": [20, 21], "guid": 20, "beginn": 20, "pattern": 21, "known": 21, "construct": 21, "receiv": 21, "data": 21, "inform": 21, "sourc": 21, "decis": 21, "produc": 21, "save": 21, "sent": 21, "govern": 21, "condit": 21, "statement": 21, "els": 21, "switch": 21, "certain": 21, "loop": 21, "reus": 21, "mechan": 21, "detect": 21, "behav": 21, "even": 21, "unexpect": 21, "situat": 21, "organ": 21, "queue": 21, "stack": 21, "dictionari": 21, "overal": 21, "revolv": 21, "effect": 21, "vari": 21, "problem": 21, "solv": 21, "tradit": 21, "exact": 21, "timer": 21, "prepar": 21, "heart": 21, "read": 21, "updat": 21, "isr": 21, "stimuli": 21, "short": 21, "overflow": 21, "quickli": 21, "driver": 21, "convert": 21, "batteri": 21, "those": 21, "strict": 21, "sleep": 21, "idl": 21, "fault": 21, "toler": 21, "harsh": 21, "paramount": 21, "respond": 21, "safe": 21, "protocol": 21, "univers": 21, "asynchron": 21, "transmitt": 21, "inter": 21, "network": 21, "ethernet": 21, "bluetooth": 21, "wireless": 21, "wi": 21, "fi": 21, "zigbe": 21, "transmit": 21, "pars": 21, "messag": 21, "physic": 21, "temperatur": 21, "adjust": 21, "motor": 21, "speed": 21, "movement": 21, "mean": 21, "deadlin": 21, "delai": 21, "method": 21, "order": 21, "advanc": 21, "train": 21, "infinit": 21, "becaus": 21, "place": 21, "repeatedli": 21, "remain": 21, "e_x": 21, "s_x": 21, "run": 21, "c_x": 21, "regard": 21, "easiest": 21, "wai": 21, "statu": 21, "straightforward": 21, "simpl": 21, "overhead": 21, "concern": 21, "practic": 21, "predict": 21, "sinc": 21, "determinist": 21, "reason": 21, "howev": 21, "ineffici": 21, "frequenc": 21, "long": 21, "interv": 21, "excess": 21, "wast": 21, "cycl": 21, "infrequ": 21, "necessarili": 21, "constant": 21, "shown": 21, "fig_gen_pol": 21, "exec1": 21, "shorter": 21, "than": 21, "exec2": 21, "increas": 21, "potenti": 21, "energi": 21, "mitig": 21, "altern": 21, "improv": 21, "enhanc": 21, "immedi": 21, "concurr": 21, "By": 21, "rather": 21, "constantli": 21, "accuraci": 21, "prioriti": 21, "preempt": 21, "lower": 21, "promptli": 21, "pend": 21, "meet": 21, "inde": 21, "fundament": 21, "schedul": 21, "synchron": 21, "own": 21, "strength": 21, "let": 21, "cite": 21, "freerto": 21, "32": 21, "x86": 21, "qnx": 21, "unix": 21, "progress": 22, "complet": 22}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"event": [0, 1, 2, 3], "interrupt": [0, 2, 21], "period": 1, "astabl": 1, "extern": [2, 7, 19], "monost": 3, "execut": 4, "time": [4, 21], "some": 4, "exampl": 4, "comparison": 4, "variou": 4, "calcul": 4, "across": 4, "differ": [4, 21], "platform": 4, "first": [5, 10], "project": [5, 10], "debug": 6, "your": [6, 10], "code": 6, "microcontrol": [6, 9, 12, 21], "i": [6, 12], "comput": [6, 12, 21], "serial": 6, "commun": 6, "alloc": 6, "output": [6, 13, 15, 16, 17], "ressourc": [7, 20], "librari": [7, 10], "lens": [7, 22], "main": [8, 10, 12, 21], "program": [8, 9, 10, 12, 21], "structur": [8, 12], "file": [8, 10], "mbed": [9, 10], "o": [9, 21], "keil": [9, 10], "studio": [9, 10], "id": [9, 10], "languag": 9, "assembli": 9, "c": 9, "free": 9, "open": 9, "sourc": 9, "iot": 9, "oper": [9, 12, 19, 21], "system": [9, 12, 21], "cloud": [9, 10], "creation": 10, "creat": 10, "defin": 10, "workspac": 10, "compil": 10, "test": 10, "select": 10, "target": 10, "flash": 10, "duplic": 10, "pre": 10, "inform": 10, "baremet": 10, "option": 10, "sd": 10, "card": 10, "fat": 10, "filesystem": 10, "cmsi": 10, "dsp": 10, "nucleo": [11, 20], "board": [11, 20], "stm32": 11, "mcu": 11, "rapid": 11, "prototyp": 11, "pin": 11, "function": 11, "g431kb": 11, "32": 11, "l476rg": 11, "64": 11, "morpho": 11, "connector": 11, "arduino": 11, "f767zi": 11, "144": 11, "embed": [12, 21], "what": 12, "an": 12, "applic": 12, "brain": 12, "v": [12, 21], "microprocessor": [12, 21], "digit": [12, 16], "data": 12, "width": [12, 17], "address": 12, "space": 12, "instruct": 12, "set": 12, "purpos": 12, "complex": 12, "step": [12, 19], "input": [13, 14, 16], "analog": [14, 15], "puls": 17, "modul": 17, "pwm": [17, 19], "led": 18, "control": [18, 19, 21], "tor": 18, "light": 18, "intens": 18, "connect": 18, "red": 18, "simpl": 18, "rgb": 18, "power": [18, 19], "smart": 18, "ws2812": 18, "type": 18, "motor": 19, "dc": 19, "principl": [19, 21], "convers": 19, "speed": 19, "stepper": 19, "without": 19, "driver": 19, "us": 19, "servomotor": 19, "from": 20, "stmicroelectron": 20, "other": 20, "poll": 21, "real": 21, "": 21, "approach": 21, "continu": 21, "limit": 21, "servic": 21, "routin": 21, "rto": 21, "python": 22, "scienc": 22, "basic": 22, "concept": 22, "categori": 22, "about": 22}, "envversion": {"sphinx.domains.c": 3, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 9, "sphinx.domains.index": 1, "sphinx.domains.javascript": 3, "sphinx.domains.math": 2, "sphinx.domains.python": 4, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx": 60}, "alltitles": {"Events and Interrupts": [[0, "events-and-interrupts"]], "Periodic events (astable)": [[1, "periodic-events-astable"]], "External events (interrupts)": [[2, "external-events-interrupts"]], "Monostable events": [[3, "monostable-events"]], "Execution time": [[4, "execution-time"]], "Some examples": [[4, "some-examples"]], "Comparison of execution time of various calculations across different platforms.": [[4, "id1"]], "First project": [[5, "first-project"]], "Debugging your code": [[6, "debugging-your-code"]], "Microcontroller is not a computer": [[6, "microcontroller-is-not-a-computer"]], "Serial communication": [[6, "serial-communication"]], "Allocated output": [[6, "allocated-output"]], "External ressources / libraries": [[7, "external-ressources-libraries"]], "LEnsE ressources": [[7, "lense-ressources"]], "External ressources": [[7, "external-ressources"]], "Main program structure": [[8, "main-program-structure"]], "Main file": [[8, "main-file"], [10, "main-file"]], "MBED OS and Keil Studio IDE": [[9, "mbed-os-and-keil-studio-ide"]], "Programming languages for microcontrollers": [[9, "programming-languages-for-microcontrollers"]], "Assembly language": [[9, "assembly-language"]], "C++ language": [[9, "c-language"]], "MBED free open source IoT operating system": [[9, "mbed-free-open-source-iot-operating-system"]], "Keil Studio Cloud": [[9, "keil-studio-cloud"], [10, "keil-studio-cloud"], [10, "id2"]], "MBED Studio": [[9, "mbed-studio"], [10, "mbed-studio"], [10, "id3"]], "Creation of a MBED project": [[10, "creation-of-a-mbed-project"]], "Keil Studio Cloud IDE": [[10, "keil-studio-cloud-ide"]], "Create your first project": [[10, "create-your-first-project"], [10, "id1"]], "MBED Studio IDE": [[10, "mbed-studio-ide"]], "Define your workspace": [[10, "define-your-workspace"]], "Compile and test": [[10, "compile-and-test"]], "Select a target": [[10, "select-a-target"]], "Compile": [[10, "compile"]], "Flash the program": [[10, "flash-the-program"]], "Duplicate a project": [[10, "duplicate-a-project"]], "Pre-compiler informations": [[10, "pre-compiler-informations"]], "Baremetal option": [[10, "baremetal-option"]], "SD card, FAT filesystem options": [[10, "sd-card-fat-filesystem-options"]], "CMSIS-DSP library": [[10, "cmsis-dsp-library"]], "Nucleo boards and STM32 MCU": [[11, "nucleo-boards-and-stm32-mcu"]], "Rapid prototyping boards": [[11, "rapid-prototyping-boards"]], "Pins and their functions": [[11, "pins-and-their-functions"]], "G431KB board - Nucleo-32": [[11, "g431kb-board-nucleo-32"]], "L476RG board - Nucleo-64": [[11, "l476rg-board-nucleo-64"]], "Morpho connectors": [[11, "morpho-connectors"]], "Arduino connectors": [[11, "arduino-connectors"]], "F767ZI board - Nucleo-144": [[11, "f767zi-board-nucleo-144"]], "Embedded systems": [[12, "embedded-systems"]], "What is an embedded system ?": [[12, "what-is-an-embedded-system"]], "Applications of embedded systems": [[12, "applications-of-embedded-systems"]], "Brains of embedded systems": [[12, "brains-of-embedded-systems"]], "Microcontrollers vs Microprocessors": [[12, "microcontrollers-vs-microprocessors"]], "What is a microprocessor ?": [[12, "what-is-a-microprocessor"]], "Digital data operations": [[12, "digital-data-operations"]], "Data width and address space": [[12, "data-width-and-address-space"]], "Instructions set": [[12, "instructions-set"]], "Main structure of a computer program": [[12, "main-structure-of-a-computer-program"]], "What is a microcontroller ?": [[12, "what-is-a-microcontroller"]], "Purpose and complexity": [[12, "purpose-and-complexity"]], "Main steps to program a microcontroller": [[12, "main-steps-to-program-a-microcontroller"]], "Inputs and Outputs": [[13, "inputs-and-outputs"]], "Analog Inputs": [[14, "analog-inputs"]], "Analog Outputs": [[15, "analog-outputs"]], "Digital inputs and outputs": [[16, "digital-inputs-and-outputs"]], "Pulsed width modulated outputs (PWM)": [[17, "pulsed-width-modulated-outputs-pwm"]], "LEDs control": [[18, "leds-control"]], "TOR control": [[18, "tor-control"]], "Light intensity control": [[18, "light-intensity-control"]], "Connecting LEDs": [[18, "connecting-leds"]], "Red LEDs": [[18, "red-leds"]], "Simple LEDs": [[18, "simple-leds"]], "RGB LEDs": [[18, "rgb-leds"]], "Power LEDs": [[18, "power-leds"]], "Smart LEDs (WS2812 type)": [[18, "smart-leds-ws2812-type"]], "Motors control": [[19, "motors-control"]], "DC motors": [[19, "dc-motors"]], "Principle of operation": [[19, "principle-of-operation"], [19, "id1"], [19, "id3"]], "Power conversion": [[19, "power-conversion"], [19, "id2"]], "Speed control with PWM": [[19, "speed-control-with-pwm"]], "Stepper-motors": [[19, "stepper-motors"]], "Step control without driver": [[19, "step-control-without-driver"]], "Using a driver": [[19, "using-a-driver"]], "Servomotors": [[19, "servomotors"]], "External Power": [[19, "external-power"]], "PWM control": [[19, "pwm-control"]], "Nucleo boards from STMicroelectronics": [[20, "nucleo-boards-from-stmicroelectronics"]], "Other ressources": [[20, "other-ressources"]], "Polling vs Interrupts vs real-time OS": [[21, "polling-vs-interrupts-vs-real-time-os"]], "Computer\u2019s vs embedded system\u2019s main program": [[21, "computer-s-vs-embedded-system-s-main-program"]], "Computer with a microprocessor": [[21, "computer-with-a-microprocessor"]], "Embedded system with a microcontroller": [[21, "embedded-system-with-a-microcontroller"]], "Different approachs for controlling": [[21, "different-approachs-for-controlling"]], "Continuous polling": [[21, "continuous-polling"]], "Operating principle": [[21, "operating-principle"]], "Limits": [[21, "limits"]], "Interrupt Service Routines": [[21, "interrupt-service-routines"]], "RTOS": [[21, "rtos"]], "Python for Science / Basics": [[22, "python-for-science-basics"]], "Basic concepts categories": [[22, "basic-concepts-categories"]], "About the LEnsE": [[22, "about-the-lense"]]}, "indexentries": {}})