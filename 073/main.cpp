#include <iostream>
#include <vector>
using namespace std;

class Solution {
public:
    void setZeroes(vector<vector<int> >& matrix) {
        int row = matrix.size();
        int col = matrix[0].size();
        int rs = 0;
        int cs = 0;
        for (int i = 0; i < row; i++) {
            for (int j = 0; j < col; j++) {
                if (!matrix[i][j]) {
                    if (!i && !j) {
                        rs = 1;
                        cs = 1;
                    } else if (!i) {
                        rs = 1;
                    } else if (!j) {
                        cs = 1;
                    } else {
                        matrix[i][0] = 0;
                        matrix[0][j] = 0;
                    }
                }
            }
        }
        for (int i = 1; i < col; i++) {
            if (!matrix[0][i]) {
                for (int j = 1; j < row; j++) matrix[j][i] = 0;
            }
        }
        for (int i = 1; i < row; i++) {
            if (!matrix[i][0]) {
                for (int j = 1; j < col; j++) matrix[i][j] = 0;
            }
        }
        if (rs) {
            for (int i = 0; i < col; i++) matrix[0][i] = 0;
        }
        if (cs) {
            for (int i = 0; i < row; i++) matrix[i][0] = 0;
        }
    }
};

int main()
{
    cout << "Hello world!" << endl;
    return 0;
}
