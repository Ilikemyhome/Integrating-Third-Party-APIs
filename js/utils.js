// helper functions to keep my code clean

// fromats timestamps nicely
export function formatTime(timeString) {
    if (!timeString) return "N/A";
    const date = new Date(timeString);
    return date.toLocaleTimeString();

}

// color codes the flight status
export function StatusColor(status) {
    const cleanStatus = status.toLowerCase();

    const colors = {
        active: "green",
        landed: "blue",
        scheduled: "orange",
        cancelled: "red",
        incident: "purple",
    };
    
    const color = colors[cleanStatus];

    // 4. If no match, use gray
    if (!color) {
        return "gray";
    }

    return color;

    }