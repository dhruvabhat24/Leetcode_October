class MyHashMap {
    private final int SIZE = 1000000; 
    private int[] keys;
    private int[] values;
    public MyHashMap() {
        keys = new int[SIZE];
        values = new int[SIZE];
        Arrays.fill(keys, -1);
        Arrays.fill(values, -1);
    }
    public void put(int key, int value) {
        int index = key % SIZE;
        while (keys[index] != -1 && keys[index] != key) {
            index = (index + 1) % SIZE;
        }
        keys[index] = key;
        values[index] = value;
    }

    public int get(int key) {
        int index = key % SIZE;
        while (keys[index] != -1) {
            if (keys[index] == key) {
                return values[index];
            }
            index = (index + 1) % SIZE;
        }
        return -1; 
    }
    public void remove(int key) {
        int index = key % SIZE;
        while (keys[index] != -1) {
            if (keys[index] == key) {
                keys[index] = -1; 
                values[index] = -1;
                return;
            }
            index = (index + 1) % SIZE;
        }
    }
}
