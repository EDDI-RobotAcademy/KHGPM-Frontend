import java.util.Random;

public class CustomRandom {
    private static int start;
    private static int end;

    private static Random random = new Random();

    public static int createCustomRandom (int start, int end) {
        return  random.nextInt(end-start+1)+start;
    }

    public static int createRandom () {
        return  random.nextInt(6)+1;
    }

    public static int createStartRandom (int start) {
        return  random.nextInt((start+6)-start+1)+start;
    }


    public static int createEndRandom (int end) {
        int start = end < 6 ? 1 : end-5;
        return  random.nextInt(end-start+1)+start;
    }



}
