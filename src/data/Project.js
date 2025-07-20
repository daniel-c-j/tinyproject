export default class Project {
    constructor({ title = "", desc = "", dateAdded = Project.getCurrentFormattedDate(), dueDate = null, isEditing = false, task = null }) {
        this.title = title;
        this.desc = desc;
        this.dateAdded = dateAdded;
        this.dueDate = dueDate;
        this.isEditing = isEditing;
        this.task = task;
    }

    static getCurrentFormattedDate() {
        const now = new Date();
        const monthNames = [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];

        // Get the month, day, and year
        const month = monthNames[now.getMonth()]; // Get month name
        const day = String(now.getDate()).padStart(2, '0'); // Get day and pad with zero if needed
        const year = now.getFullYear(); // Get full year

        // Return formatted date
        return `${month}, ${day}, ${year}`;
    }
}