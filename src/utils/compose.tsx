export const compose = (...func: Function[]) => (comp: any) => {
    return func.reduceRight((wrapped, f) => f(wrapped), comp);
};
