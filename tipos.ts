enum AlertType 
{
    success,
    Error,
    Warning,
};

function createAlert (message: string, type: AlertType)
: void {
    switch (type)
    {
        case AlertType.success:
        alert (message)
        break;
        case AlertType.Warning:
        console.warn (message);
        break;
    }
    
}