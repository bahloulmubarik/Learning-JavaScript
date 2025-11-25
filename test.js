let users = [];          // all accounts list
let currentUser = null; // currently logged in user

// Event Listeners
document.getElementById("createAccountBtn").addEventListener("click", showCreateAccountForm);
document.getElementById("createBtn").addEventListener("click", createAccount);
document.getElementById("backBtn").addEventListener("click", backToWelcome);
document.getElementById("logoutBtn").addEventListener("click", logout);
document.getElementById("depositBtn").addEventListener("click", deposit);
document.getElementById("withdrawBtn").addEventListener("click", withdraw);

// Show Create Account Form
function showCreateAccountForm() {
    switchScreen("createAccountForm");
}

// Create Account
function createAccount() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    if (!name || !email || !password) {
        alert("All fields are required!");
        return;
    }

    // Check if email already exists
    if (users.some(user => user.email === email)) {
        alert("Email already registered! Please use a different email.");
        return;
    }

    // Validate email format
    if (!isValidEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Create new user
    let newUser = {
        name: name,
        email: email,
        password: password,
        balance: 0,
        transactions: []
    };

    users.push(newUser);
    console.log("Users:", users);

    alert("Account created successfully!");

    // Clear form
    document.getElementById("accountForm").reset();

    // Auto-login and redirect to dashboard
    currentUser = newUser;
    loadDashboard();
}

// Validate email format
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Load Dashboard
function loadDashboard() {
    if (currentUser) {
        document.getElementById("userName").textContent = currentUser.name;
        document.getElementById("balance").textContent = currentUser.balance.toFixed(2);
        updateTransactionHistory();
        switchScreen("dashboard");
    }
}

// Deposit Money
function deposit() {
    let amount = parseFloat(document.getElementById("depositAmount").value);

    if (!amount || amount <= 0) {
        alert("Please enter a valid amount!");
        return;
    }

    currentUser.balance += amount;
    currentUser.transactions.push({
        type: "Deposit",
        amount: amount,
        date: new Date().toLocaleString()
    });

    document.getElementById("depositAmount").value = "";
    document.getElementById("balance").textContent = currentUser.balance.toFixed(2);
    updateTransactionHistory();

    alert(`$${amount.toFixed(2)} deposited successfully!`);
}

// Withdraw Money
function withdraw() {
    let amount = parseFloat(document.getElementById("withdrawAmount").value);

    if (!amount || amount <= 0) {
        alert("Please enter a valid amount!");
        return;
    }

    if (amount > currentUser.balance) {
        alert("Insufficient balance!");
        return;
    }

    currentUser.balance -= amount;
    currentUser.transactions.push({
        type: "Withdraw",
        amount: amount,
        date: new Date().toLocaleString()
    });

    document.getElementById("withdrawAmount").value = "";
    document.getElementById("balance").textContent = currentUser.balance.toFixed(2);
    updateTransactionHistory();

    alert(`$${amount.toFixed(2)} withdrawn successfully!`);
}

// Update Transaction History
function updateTransactionHistory() {
    let transactionList = document.getElementById("transactionList");
    transactionList.innerHTML = "";

    if (currentUser.transactions.length === 0) {
        transactionList.innerHTML = '<li class="empty-message">No transactions yet</li>';
        return;
    }

    // Display transactions in reverse order (most recent first)
    [...currentUser.transactions].reverse().forEach(transaction => {
        let li = document.createElement("li");
        li.className = transaction.type.toLowerCase();
        li.textContent = `${transaction.type}: $${transaction.amount.toFixed(2)} - ${transaction.date}`;
        transactionList.appendChild(li);
    });
}

// Back to Welcome
function backToWelcome() {
    document.getElementById("accountForm").reset();
    switchScreen("welcomeScreen");
}

// Logout
function logout() {
    currentUser = null;
    document.getElementById("depositAmount").value = "";
    document.getElementById("withdrawAmount").value = "";
    switchScreen("welcomeScreen");
}

// Switch Screen
function switchScreen(screenId) {
    // Hide all screens
    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });

    // Show selected screen
    document.getElementById(screenId).classList.add("active");
}
