// function that returns markdown image links for badges associated with chosen license values
export function licenseBadge(value) {
    if (value === "MIT License") {
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    } else if (value === "Apache License 2.0") {
        return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    } else if (value === "Mozilla Public License 2.0") {
        return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    } else if (value === "GNU GPLv3") {
        return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    } else if (value === "GNU AGPLv3") {
        return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
    } else if (value === "GNU LGPLv3") {
        return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
    } else if (value === "Boost Software License 1.0") {
        return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
    } else if (value === "The Unlicense") {
        return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
    } else {
        return "";
    }
}

export function licenseLinks(value) {
    if (value === "MIT License") {
        return "[MIT License](https://choosealicense.com/licenses/mit/)";
    } else if (value === "Apache License 2.0") {
        return "[Apache License 2.0](https://choosealicense.com/licenses/apache-2.0/)";
    } else if (value === "Mozilla Public License 2.0") {
        return "[Mozilla Public License 2.0](https://choosealicense.com/licenses/mpl-2.0/)";
    } else if (value === "GNU GPLv3") {
        return "[GNU GPLv3](https://choosealicense.com/licenses/gpl-3.0/)";
    } else if (value === "GNU AGPLv3") {
        return "[GNU AGPLv3](https://choosealicense.com/licenses/agpl-3.0/)";
    } else if (value === "GNU LGPLv3") {
        return "[GNU LGPLv3](https://choosealicense.com/licenses/lgpl-3.0/)";
    } else if (value === "Boost Software License 1.0") {
        return "[Boost Software License 1.0](https://choosealicense.com/licenses/bsl-1.0/)";
    } else if (value === "The Unlicense") {
        return "[The Unlicense](https://choosealicense.com/licenses/unlicense/)";
    } else {
        return "";
    }
}