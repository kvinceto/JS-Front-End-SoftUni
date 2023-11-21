function history(obj, arr) {
    let browser = obj['Browser Name'];
    let open = obj['Open Tabs'];
    let recent = obj['Recently Closed'];
    let logs = obj['Browser Logs'];

    arr.forEach(element => {
        if (element === 'Clear History and Cache') {
            open = [];
            recent = [];
            logs = [];
        } else {
            let [action, site] = element.split(' ');
            if (action === 'Open') {
                open.push(site);
                logs.push(element);
            } else if (action === 'Close') {
                if (open.includes(site)) {
                    let idx = open.findIndex(i => i == site);
                    if (idx >= 0) {
                        let removed = open.splice(idx, 1);
                        recent.push(removed[0]);
                        logs.push(element);
                    }
                }
            }
        }
    })

console.log(browser);
console.log(`Open Tabs: ${open.join(', ')} `);
console.log(`Recently Closed: ${recent.join(', ')}`);
console.log(`Browser Logs: ${logs.join(', ')}`)
}

history({
    "Browser Name": "Google Chrome", "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
    "Recently Closed": ["Yahoo", "Gmail"],
    "Browser Logs": ["Open YouTube", "Open Yahoo", "Open Google Translate", "Close Yahoo", "Open Gmail", "Close Gmail", "Open Facebook"]
},
    ["Close Facebook", "Open StackOverFlow", "Open Google"]

);

history({
    "Browser Name": "Mozilla Firefox",
    "Open Tabs": ["YouTube"],
    "Recently Closed": ["Gmail", "Dropbox"],
    "Browser Logs": ["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]
},
    ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]

);