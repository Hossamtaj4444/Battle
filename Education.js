function toggleDescription(toolId) {
    var description = document.getElementById(toolId);
    if (description.classList.contains('show')) {
        description.classList.remove('show');
    } else {
        var allDescriptions = document.querySelectorAll('.tool-description');
        allDescriptions.forEach(function(desc) {
            desc.classList.remove('show');
        });
        description.classList.add('show');
    }
}
