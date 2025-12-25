document.addEventListener('DOMContentLoaded', () => {
    // State
    let username = '';
    let selectedAmount = '1,700';
    let currentStep = 1;

    // Elements
    const steps = [
        document.getElementById('step-1'),
        document.getElementById('step-2'),
        document.getElementById('step-3'),
        document.getElementById('step-4')
    ];

    const usernameInput = document.getElementById('username');
    const connectBtn = document.getElementById('connect-btn');
    const platforms = document.querySelectorAll('.platform');
    const rewardItems = document.querySelectorAll('.reward-item');
    const generateBtn = document.getElementById('generate-btn');
    const progressBar = document.getElementById('progress-bar');
    const consoleLog = document.getElementById('console-log');
    const displayUsername = document.getElementById('display-username');
    const verifyBtn = document.getElementById('verify-btn');
    const activityList = document.getElementById('activity-list');

    // Navigation
    function showStep(stepNum) {
        steps.forEach((step, index) => {
            step.classList.toggle('active', index === stepNum - 1);
        });
        currentStep = stepNum;
    }

    // Platform selection
    platforms.forEach(p => {
        p.addEventListener('click', () => {
            platforms.forEach(x => x.classList.remove('active'));
            p.classList.add('active');
        });
    });

    // Reward selection
    rewardItems.forEach(item => {
        item.addEventListener('click', () => {
            rewardItems.forEach(x => x.classList.remove('active'));
            item.classList.add('active');
            selectedAmount = item.getAttribute('data-amount');
        });
    });

    // Step 1: Connect
    connectBtn.addEventListener('click', () => {
        username = usernameInput.value.trim();
        if (username.length < 3) {
            alert('Please enter a valid Roblox username.');
            return;
        }
        
        connectBtn.disabled = true;
        connectBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Searching...';
        
        setTimeout(() => {
            showStep(2);
        }, 1500);
    });

    // Step 2: Generate
    generateBtn.addEventListener('click', () => {
        showStep(3);
        startSimulation();
    });

    // Step 3: Simulation Logic
    function startSimulation() {
        const logs = [
            `Connecting to Roblox API...`,
            `Searching for user "${username}"...`,
            `User found! ID: ${Math.floor(Math.random() * 99999999)}`,
            `Initializing encrypted tunnel...`,
            `Preparing packets for ${selectedAmount} Robux...`,
            `Bypassing secondary verification...`,
            `Injecting data packets into main server...`,
            `Synchronizing with database...`,
            `Almost complete...`,
            `Error: Manual Verification Required!`
        ];

        let progress = 0;
        let logIndex = 0;
        
        const interval = setInterval(() => {
            progress += Math.random() * 3;
            if (progress >= 100) {
                progress = 100;
                clearInterval(interval);
                setTimeout(() => {
                    displayUsername.innerText = username;
                    showStep(4);
                }, 1000);
            }
            
            progressBar.style.width = `${progress}%`;

            // Update logs based on progress
            const targetLogIndex = Math.floor((progress / 100) * logs.length);
            if (targetLogIndex > logIndex && logIndex < logs.length) {
                for(let i = logIndex; i < targetLogIndex; i++) {
                    const p = document.createElement('p');
                    p.innerHTML = `<span style="color: #555">[${new Date().toLocaleTimeString()}]</span> ${logs[i]}`;
                    consoleLog.appendChild(p);
                    consoleLog.scrollTop = consoleLog.scrollHeight;
                }
                logIndex = targetLogIndex;
            }
        }, 100);
    }

    // Step 4: Verification (OGAds Integration)
    verifyBtn.addEventListener('click', () => {
        // REPLACE THE LINE BELOW WITH YOUR OGADS CONTENT LOCKER SCRIPT CALL
        // Example: call_locker();
        
        alert("This is where your OGAds Locker will open!");
        
        // If you use a URL instead of a script:
        // window.location.href = "YOUR_OGADS_LOCKER_URL_HERE";
    });

    // Recent Activity Simulation
    const names = [
        "Liam_Blox", "iiSophia", "ItzChloe", "xXNoahXx", "SunnyOlivia", "MasonGamer", "SparkleAva", "Ethan_Playz",
        "ItzIsabella", "JacobRockz", "MiaSunshine", "LucasVibes", "CharlotteSky", "AidenExplorer", "Amelia_Moon",
        "ElijahFire", "HarperHearts", "JamesWorld", "EvelynCloud", "BenjaminHero", "AbigailStar", "William_Dev",
        "EmilyMagic", "MichaelPro", "ElizabethGem", "Daniel_YT", "Sofia_ii", "Henry_B", "AveryAesthetic",
        "Sebastian_G", "ScarlettRose", "JackDragon", "VictoriaWin", "Samuel_S", "Madison_M", "Alex_Gamer",
        "Luna_Vibes", "Leo_TheLion", "Grace_G", "David_D", "Chloe_Playz", "John_J", "Penelope_P", "Luke_Cool",
        "Layla_L", "Anthony_A", "Riley_R", "Isaac_I", "Zoey_Z", "Dylan_D", "Nora_N", "Wyatt_W", "Hazel_H",
        "Andrew_A", "Lily_L", "Joshua_J", "Ellie_E", "Christopher_C", "Violet_V", "Grayson_G", "Stella_S",
        "Julian_J", "Aurora_A", "Ryan_R", "Natalie_N", "Jaxon_J", "Hazel_H", "Hunter_H", "Audrey_A",
        "Christian_C", "Brooklyn_B", "Landon_L", "Bella_B", "Jonathan_J", "Claire_C", "Isaiah_I", "Skylar_S",
        "Charles_C", "Lucy_L", "Thomas_T", "Paisley_P", "Aaron_A", "Everly_E", "Nathan_N", "Anna_A",
        "Miles_M", "Caroline_C", "Adrian_A", "Nova_N", "Nolan_N", "Genesis_G", "Easton_E", "Emilia_E",
        "Elias_E", "Kennedy_K", "Colton_C", "Maya_M", "Cameron_C", "Madelyn_M", "Axel_A", "Adeline_A"
    ];
    const amounts = ["400", "800", "1,700", "4,500", "10,000"];

    function addActivity() {
        const name = names[Math.floor(Math.random() * names.length)];
        const amount = amounts[Math.floor(Math.random() * amounts.length)];
        
        const item = document.createElement('div');
        item.className = 'activity-item';
        item.innerHTML = `
            <span class="activity-user"><i class="fas fa-user"></i> ${name}***</span>
            <span class="activity-amount">+${amount} Robux</span>
        `;
        
        activityList.prepend(item);
        
        if (activityList.children.length > 5) {
            activityList.removeChild(activityList.lastChild);
        }
    }

    // Initial activities
    for(let i=0; i<5; i++) addActivity();
    
    // New activity every 5-10 seconds
    setInterval(addActivity, Math.random() * 5000 + 5000);
});
