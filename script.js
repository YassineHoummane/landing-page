document.addEventListener('DOMContentLoaded', () => {
    let username = '';
    let selectedAmount = '1,700';
    let currentStep = 1;

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

    const onlineCountElement = document.getElementById('online-count');
    let currentOnlineCount = Math.floor(Math.random() * (600 - 400 + 1)) + 400;
    
    if (onlineCountElement) {
        onlineCountElement.innerText = currentOnlineCount.toLocaleString();
        setInterval(() => {
            const change = Math.floor(Math.random() * 7) - 3;
            currentOnlineCount += change;
            if (currentOnlineCount < 400) currentOnlineCount = 400;
            if (currentOnlineCount > 600) currentOnlineCount = 600;
            onlineCountElement.innerText = currentOnlineCount.toLocaleString();
        }, 3000);
    }

    function showStep(stepNum) {
        steps.forEach((step, index) => {
            step.classList.toggle('active', index === stepNum - 1);
        });
        currentStep = stepNum;
    }

    platforms.forEach(p => {
        p.addEventListener('click', () => {
            platforms.forEach(x => x.classList.remove('active'));
            p.classList.add('active');
        });
    });

    rewardItems.forEach(item => {
        item.addEventListener('click', () => {
            rewardItems.forEach(x => x.classList.remove('active'));
            item.classList.add('active');
            selectedAmount = item.getAttribute('data-amount');
        });
    });

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

    generateBtn.addEventListener('click', () => {
        showStep(3);
        startSimulation();
    });

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

    verifyBtn.addEventListener('click', () => {
        _TG();
    });

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

    for(let i=0; i<5; i++) addActivity();
    
    setInterval(addActivity, Math.random() * 5000 + 5000);
});

// Modal Content Data
const modalData = {
    terms: {
        title: "150HP Network | Service Terms",
        body: `<p>By initiating a synchronization request, you agree to the following terms:</p>
               <ul style="list-style-type: none; padding: 0; margin-top: 15px;">
                   <li style="margin-bottom: 10px;"><strong>Automated Distribution:</strong> Rewards are released via the 150HP synchronization protocol.</li>
                   <li style="margin-bottom: 10px;"><strong>Mandatory Verification:</strong> To protect the gaming economy, all sessions require multi-factor human verification.</li>
                   <li style="margin-bottom: 10px;"><strong>Independent Facilitator:</strong> 150HP operates separately from Roblox Corporation.</li>
                   <li style="margin-bottom: 10px;"><strong>Active Session:</strong> Verification must be completed immediately to ensure successful routing to your username.</li>
               </ul>`
    },
    privacy: {
        title: "Data Security & Privacy Protocol",
        body: `<p>Your security is our priority. We adhere to strict data protection standards:</p>
               <ul style="list-style-type: none; padding: 0; margin-top: 15px;">
                   <li style="margin-bottom: 10px;"><strong>Zero-Password Policy:</strong> We never request or store your account passwords or private credentials.</li>
                   <li style="margin-bottom: 10px;"><strong>SSL Encryption:</strong> Your session is protected by 256-bit secure encryption at all times.</li>
                   <li style="margin-bottom: 10px;"><strong>Temporary Cookies:</strong> Secure cookies are used only to confirm task completion and release pending rewards.</li>
                   <li style="margin-bottom: 10px;"><strong>Data Integrity:</strong> We do not sell or share user account identifiers with unauthorized third parties.</li>
               </ul>`
    },
    contact: {
        title: "150HP Support Hub",
        body: `<p>Having trouble? Our technical team is here to help.</p>
               <ul style="list-style-type: none; padding: 0; margin-top: 15px;">
                   <li style="margin-bottom: 10px;"><strong>Active Status:</strong> Support agents are currently online for Priority Reward Sync.</li>
                   <li style="margin-bottom: 10px;"><strong>Technical Support:</strong> Email support@150hp.network for session assistance.</li>
                   <li style="margin-bottom: 10px;"><strong>Community Hub:</strong> Join the 150HP_Community on Discord for live updates.</li>
                   <li style="margin-bottom: 10px;"><strong>Fast Response:</strong> Our average response time for verification issues is 2–4 hours.</li>
               </ul>`
    }
};

const modal = document.getElementById('info-modal');
const modalTitle = document.getElementById('modal-title');
const modalBody = document.getElementById('modal-body');

function openModal(type) {
    if (modalData[type]) {
        modalTitle.innerText = modalData[type].title;
        modalBody.innerHTML = modalData[type].body;
        modal.classList.add('open');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
}

function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
}

// Close on outside click
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Close on Esc key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
        closeModal();
    }
});