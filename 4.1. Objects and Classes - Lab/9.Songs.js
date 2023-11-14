function solve(input) {
    let n = input.shift();
    let typeList = input.pop();
    let arr = [];

    class Song {
        constructor(type, name, time){
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }

    input.forEach(item => {
        let [type, name, time] = item.split('_');

        let song = new Song(type, name, time);

        arr.push(song);
    });

    if (typeList === 'all') {
        arr.forEach(x => {
            console.log(x.name);
        })
    } else {
        arr.forEach(x => {
            if (x.type === typeList) {
                console.log(x.name);
            }
        })
    }
}

solve([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
);

solve([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']
);

solve([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']
);