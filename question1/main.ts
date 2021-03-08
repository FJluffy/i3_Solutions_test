export function isValidWalk(walk: string[]) {
    if (walk.length !== 10) {
        return false;
    }
    let num: number = 0;

    for (let i = 0; i < 10; i++) {
        switch (walk[i]) {
            case 'n': num += 1
                break;
            case 's': num -= 1
                break;
            case 'w': num += 10
                break;
            case 'e': num -= 10
                break;
        }
    }
    if (num === 0) {
        return true;
    }
    return false;
}

