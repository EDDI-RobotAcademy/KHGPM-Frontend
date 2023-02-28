import java.util.Random;

public class CustomRandom {
    private static int start;
    private static int end;

    private static Random random = new Random();

    public static int createCustomRandom (int start, int end) {
        return  random.nextInt(end-start+1)+start;
    }
}
