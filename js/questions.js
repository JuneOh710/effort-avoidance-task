const EASY_QUESTIONS = [
    [[6, 5, 7, 1], [1, 4, 9, 8], [2, 5, 6, 9], [2, 4, 1, 3]],
    [[4, 6, 7, 9], [4, 6, 3, 8], [3, 6, 9, 2], [6, 7, 5, 1]],
    [[5, 8, 11, 13], [1, 4, 7, 5], [9, 12, 10, 11], [2, 5, 3, 6]],
    [[3, 6, 8, 9], [3, 6, 8, 7], [6, 7, 4, 3], [2, 4, 3, 6]],
    [[9, 11, 13, 14], [9, 11, 13, 12], [7, 8, 9, 5], [3, 5, 2, 1]],
    [[2, 5, 7, 11], [1, 6, 8, 3], [4, 6, 3, 7], [3, 6, 8, 7]],
    [[1, 5, 8, 9], [1, 5, 9, 8], [1, 5, 4, 6], [1, 7, 9, 6]],
    [[5, 8, 11, 14], [11, 14, 13, 15], [11, 12, 10, 15], [5, 7, 3, 8]],
    [[4, 7, 8, 9], [4, 6, 8, 7], [3, 5, 6, 4], [3, 4, 7, 6]],
    [[3, 6, 9, 10], [3, 9, 6, 4], [4, 6, 9, 7], [4, 7, 6, 9]],
    [[8, 7, 9, 3], [3, 6, 11, 10], [4, 7, 8, 11], [4, 6, 3, 5]],
    [[6, 8, 9, 11], [6, 8, 5, 10], [5, 8, 11, 4], [8, 9, 7, 3]],
    [
        [7, 10, 13, 15],
        [3, 6, 9, 7],
        [11, 14, 12, 13],
        [4, 7, 5, 8]
    ],
    [[5, 8, 10, 11], [5, 8, 10, 9], [8, 9, 6, 5], [4, 6, 5, 8]],
    [
        [11, 13, 15, 16],
        [11, 13, 15, 14],
        [9, 10, 11, 7],
        [5, 7, 4, 3]
    ],
    [[4, 7, 9, 13], [3, 8, 10, 5], [6, 8, 5, 9], [5, 8, 10, 9]],
    [
        [3, 7, 10, 11],
        [3, 7, 11, 10],
        [3, 7, 6, 8],
        [3, 9, 11, 8]
    ],
    [
        [7, 10, 13, 16],
        [13, 16, 15, 17],
        [13, 14, 12, 17],
        [7, 9, 5, 10]
    ],
    [[6, 9, 10, 11], [6, 8, 10, 9], [5, 7, 8, 6], [5, 6, 9, 8]],
    [
        [5, 8, 11, 12],
        [5, 11, 8, 6],
        [6, 8, 11, 9],
        [6, 9, 8, 11]
    ]
];

const HARD_QUESTIONS = [
    [[4521, 4621, 4638, 4698], [8412, 8469, 8415, 8920], [7625, 7629, 7418, 7698], [5562, 5584, 5589, 5412]],
    [[3412, 3586, 3552, 7845], [7432, 7162, 7489, 7811], [8246, 8265, 8792, 6523], [2623, 2861, 2871, 2965]],
    [[9562, 9630, 9521, 8758], [5431, 5486, 5489, 5725], [3187, 3569, 3587, 3245], [2316, 2112, 2369, 3874]],
    [[6685, 6692, 7214, 6958], [4627, 2875, 2965, 2987], [5214, 5324, 5174, 5362], [4612, 5822, 5826, 5871]],
    [[1731, 1816, 1869, 1861], [9521, 9645, 9653, 9658], [5623, 5421, 5489, 5428], [7124, 7245, 7128, 7168]],
    [[1451, 1562, 1459, 1487], [5478, 5632, 5634, 5612], [4731, 4512, 4516, 4532], [8136, 8252, 8256, 8278]],
    [
        [5048, 5148, 5165, 5225],
        [8939, 8996, 8942, 9447],
        [8152, 8156, 7945, 8225],
        [6089, 6111, 6116, 5939]
    ],
    [
        [3939, 4113, 4079, 8372],
        [7959, 7689, 8016, 8338],
        [8773, 8792, 9319, 7050],
        [3150, 3388, 3398, 3492]
    ],
    [
        [10089, 10157, 10048, 9285],
        [5958, 6013, 6016, 6252],
        [3714, 4096, 4114, 3772],
        [2843, 2639, 2896, 4401]
    ],
    [
        [7212, 7219, 7741, 7485],
        [5154, 3402, 3492, 3514],
        [5741, 5851, 5701, 5889],
        [5139, 6349, 6353, 6398]
    ],
    [
        [2258, 2343, 2396, 2388],
        [10048, 10172, 10180, 10185],
        [6150, 5948, 6016, 5955],
        [7651, 7772, 7655, 7695]
    ],
    [
        [1978, 2089, 1986, 2014],
        [6005, 6159, 6161, 6139],
        [5258, 5039, 5043, 5059],
        [8663, 8779, 8783, 8805]
    ],

    [
        [3624, 3724, 3741, 3801],
        [7515, 7572, 7518, 8023],
        [6728, 6732, 6521, 6801],
        [4665, 4687, 4692, 4515]
    ],
    [
        [2515, 2689, 2655, 6948],
        [6535, 6265, 6592, 6914],
        [7349, 7368, 7895, 5626],
        [1726, 1964, 1974, 2068]
    ],
    [
        [8665, 8733, 8624, 7861],
        [4534, 4589, 4592, 4828],
        [2290, 2672, 2690, 2348],
        [1419, 1215, 1472, 2977]
    ],
    [
        [5788, 5795, 6317, 6061],
        [3730, 1978, 2068, 2090],
        [4317, 4427, 4277, 4465],
        [3715, 4925, 4929, 4974]
    ],
    [
        [834, 919, 972, 964],
        [8624, 8748, 8756, 8761],
        [4726, 4524, 4592, 4531],
        [6227, 6348, 6231, 6271]
    ],
    [
        [554, 665, 562, 590],
        [4581, 4735, 4737, 4715],
        [3834, 3615, 3619, 3635],
        [7239, 7355, 7359, 7381]
    ]
];