const tests: Record<string, Date> = {}


export const startPerformanceTest = (lbl: string) => {
    tests[lbl] = new Date();
}

export const endPerformanceTest = (label: string) => {
    const end = new Date();
    const start = tests[label];
    if (!start) { return; }
    console.warn(`${label}: ${end.getTime() - start.getTime()}ms`);
    delete tests[label];
}